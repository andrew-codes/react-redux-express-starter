import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import App from './App';
import logo from './assets/images/logo.png';
import icon57 from './assets/images/apple-icon-57x57.png';
import icon72 from './assets/images/apple-icon-72x72.png';
import icon114 from './assets/images/apple-icon-114x114.png';
import icon144 from './assets/images/apple-icon-144x144.png';

export default (data) => {
    const assets = Object.keys(data.webpackStats.compilation.assets);
    const css = assets.filter(value => value.match(/\.css$/));
    const js = assets.filter(value => value.match(/\.js$/));
    return Promise.resolve(`<!DOCTYPE html>
<html>
<head>
    <title>${data.title}</title>
    <base href="${data.baseHref}" />
    <link rel="icon" type="image/png" href="${logo}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon57}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon72}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon114}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon144}" />
    ${css.map(asset => `<link rel="stylesheet" href="/dist/${asset}" />`).join()}
    ${js.map(asset => `<script src="/dist/${asset}" async></script>`).join()}
</head>
<body>
<div id="app">${renderToString(<App/>)}</div>
</body>
</html>
`);
};

if (typeof global.document !== 'undefined') {
    const rootEl = global.document.getElementById('app');
    render(
        <App/>,
        rootEl,
    );
}