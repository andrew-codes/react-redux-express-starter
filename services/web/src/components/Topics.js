import React from 'react';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

export default ({match, route}) => (
    <div>
        <span>Topics</span>
        <Link to={`${match.url}/a-topic`}>A topic</Link>
        {route.routes && renderRoutes(route.routes)}
        {match.isExact && (
            <span>Pick a topic</span>
        )}
    </div>
)