import React, { createContext, useReducer } from 'react';
const initialState = { refName: undefined, click: false };
const store = createContext(initialState);
const { Provider } = store;

function StateProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_REF':
                return { refName: action.refName, click: !initialState.click }
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider };