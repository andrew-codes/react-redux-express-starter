import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import App from './App';
import routes from './routes';
import configureStore from './store';
import logo from 'assets/images/logo.png';
import icon57 from 'assets/images/apple-icon-57x57.png';
import icon72 from 'assets/images/apple-icon-72x72.png';
import icon114 from 'assets/images/apple-icon-114x114.png';
import icon144 from 'assets/images/apple-icon-144x144.png';

export default (data) => {
    const ReactRouterDOM = require('react-router-dom');
    const {StaticRouter} = require('react-router');
    const assets = Object.keys(data.webpackStats.compilation.assets);
    const css = assets.filter(value => value.match(/\.css$/));
    const js = assets.filter(value => value.match(/\.js$/));

    const context = {
        url: data.path,
    };

    const promises = [];
    routes.some(route => {
        const match = ReactRouterDOM.matchPath(data.path, route);
        if (match) {
            promises.push(route.loadData(match));
        }
        return match;
    });

    return Promise.all(promises)
        .then(initialStates => `<!DOCTYPE html>
<html>
<head>
    <title>${data.title}</title>
    <link rel="icon" type="image/png" href="${logo}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon57}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon72}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon114}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${icon144}" />
    ${css.map(asset => `<link rel="stylesheet" href="/dist/${asset}" />`).join()}
    <script>
        window.__INITIAL_STATE__=${JSON.stringify(initialStates.reduce((output, state) => Object.assign(output, state)))};
    </script>
    ${js.map(asset => `<script src="/dist/${asset}" async></script>`).join()}
</head>
<body>
<div id="app">${renderToString(createApp(initialStates, StaticRouter, context))}</div>
</body>
</html>
`);
};

if (typeof global.document !== 'undefined') {
    const initialState = window.__INITIAL_STATE__;
    const context = {};
    const App = createApp(initialState, BrowserRouter, context);
    const rootEl = global.document.getElementById('app');
    render(App, rootEl,);
}

function createApp(initialState, Router, context) {
    const store = configureStore(initialState);
    return (
        <Provider store={store}>
            <Router context={context}>
                <App/>
            </Router>
        </Provider>
    );
}