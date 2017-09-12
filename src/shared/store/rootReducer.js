import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import authReducer from './../state/auth';

export default combineReducers({
    routing: router,
    atom: authReducer
});