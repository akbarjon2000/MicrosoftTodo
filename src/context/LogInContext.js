import React, { useState, createContext } from 'react'

export const LogInContext = createContext();

const LogInContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <LogInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {children}
        </LogInContext.Provider>
    )
}

export default LogInContextProvider
