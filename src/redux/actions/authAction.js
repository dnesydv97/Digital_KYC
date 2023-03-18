export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
import api from '../../Services/ApiServices'

export const registerUser = (authData) => {

    const {email, username, password, confirmPassword} = authData;


    return async dispatch => {
        var config = {
            method: 'POST',
            url: '/api/Account/Register',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                email,
                username,
                password,
                confirmPassword
            }),
          };

        const result = await api(config)

        const resultData = await result.json();
        //console.log(resultData);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: 1
        });
    }
}

export const loginUser = (authData) => {
    const {email, password} = authData;

    return async dispatch => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: 1
        });
    }
}