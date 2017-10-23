import React from 'react';
import {Route, Switch} from 'react-router';
import routes from './routes'

export default () => (
    <Switch>
        {routes.map((route, index) => (
            <Route
                {...route}
                key={index}
            />
        ))}
    </Switch>
)