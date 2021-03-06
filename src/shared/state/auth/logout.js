import { createAction } from 'redux-actions';
import axios from 'axios';
import { push } from 'react-router-redux';

const ACTION_TYPE = 'LOGOUT';

const actionCreator = createAction(ACTION_TYPE);

export const logout = () => (dispatch) => {
    axios.get('/api/logout')
        .then(() => {
            dispatch(actionCreator());
            dispatch(push('/'));
        })
        .catch(error => {
            dispatch(push('/'));
        })
};

const reducer = (state, payload) => ({ ...state, user: null, auth: false });

export default {
    [ACTION_TYPE]: reducer
}