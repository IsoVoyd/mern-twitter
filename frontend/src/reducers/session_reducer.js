import { RECEIVE_USER_LOGOUT } from "../actions/session_actions"

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default (prevState=initialState, action) => {
    switch(action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            }
        default: 
            return prevState;
    }
}