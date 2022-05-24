import axios from "axios"
import { CLEAR_ERRORS, FAIL, GET_CURRENT, LOGOUT, SIGN_IN, SIGN_UP } from "../Types/AuthTypes"



export const sign_up = (data, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/SignUp', data)
        dispatch({ type: SIGN_UP, payload: res.data })   // msg token user 
        navigate('/')
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data })   //errors
    }
}


export const sign_in = (data, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/SignIn', data)
        dispatch({ type: SIGN_IN, payload: res.data })
        navigate('/')
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data })
    }
}



export const get_current = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            authorization: token
        }
    }
    try {
        const res = await axios.get('/auth/me', config)
        dispatch({ type: GET_CURRENT, payload: res.data })
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const clear_errors = () => {
    return {
        type: CLEAR_ERRORS
    }
}