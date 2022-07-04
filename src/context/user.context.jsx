import { createContext, useState, useEffect, useReducer } from 'react';

import { onAuthStateChangedListener, signOutUser, createUserDocumentsFromAuth } from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reducer.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const { type, payload } = action;

    switch(type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error( `Unhandled type ${type} in userReducer`)

    }
}

const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) => {
        // dispatch({type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user});
        dispatch(
            createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
        );
    }
    const value = { currentUser, setCurrentUser };

    // signOutUser();
    // UserContext --- firebase/onAuthStateChanged
    useEffect(() => {
        async function fetchData() {
            const unsubscribe = onAuthStateChangedListener ((user) => {
                if (user) {
                    createUserDocumentsFromAuth(user);
                }
                setCurrentUser(user);
            });

            return unsubscribe;
        }
        fetchData();
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};