import createReducer from './../../store/createReducer';
import loginReducer, { login } from './login';
import logoutReducer, { logout } from './logout';
import signupReducer, { signup } from './signup';
import { resetPassword } from './resetPassword';
import verifyReducer, { verifyEmail } from './verifyEmail';
import { sendEmailVerification } from './sendEmailVerification';


export const Actions = {
    login,
    logout,
    signup,
    resetPassword,
    verifyEmail,
    sendEmailVerification
};

export default createReducer({
    ...loginReducer,
    ...logoutReducer,
    ...signupReducer,
    ...verifyReducer
});