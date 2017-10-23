import { createStore, compose } from 'redux';
import createMiddlewares from './createMiddlewares';
import rootReducer from './rootReducer';

export default (initialState = {}) => {
    const enhancers = [createMiddlewares()];
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};