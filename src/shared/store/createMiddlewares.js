import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default (history) => applyMiddleware(
    thunk,
    routerMiddleware(history)
);