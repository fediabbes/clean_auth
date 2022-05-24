import { CLEAR_ERRORS, FAIL, GET_CURRENT, LOGOUT, SIGN_IN, SIGN_UP } from "../Types/AuthTypes"


const initialState = {
    user: [],
    auth: false,
    errors: []
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.user, auth: true }
        case SIGN_IN:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.user, auth: true }
        case GET_CURRENT:
            return { ...state, user: action.payload, auth: true }
        case FAIL:
            return { ...state, errors: action.payload.errors, auth: false }
        case LOGOUT:
            localStorage.removeItem('token')
            return { ...state, auth: false }
        case CLEAR_ERRORS:
            return { ...state, errors: [] }
        default:
            return state
    }
}

export default AuthReducer

