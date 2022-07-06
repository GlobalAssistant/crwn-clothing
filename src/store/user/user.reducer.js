//copied from user.context.jsx - userReducer 
// comparison:
//      no useReduce() - hook here
//      Here, it should have default state

import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;

    }
}