import React, { createContext } from 'react'
import { initializeApp, } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJxs-B5MkfTvuYU1m94b28ibevrMA57DE",
    authDomain: "todo-1416b.firebaseapp.com",
    projectId: "todo-1416b",
    storageBucket: "todo-1416b.appspot.com",
    messagingSenderId: "207546512803",
    appId: "1:207546512803:web:ecf6d52fff5895d3551616"
};
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    initializeApp(firebaseConfig);
    const auth = getAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;