import React, { useState, createContext } from 'react';

export const UserIdContext = createContext();

const UserId = ({ children }) => {
    const [user, setUser] = useState(localStorage.user);
    return (
        <UserIdContext.Provider value={user}>
            {children}
        </UserIdContext.Provider>
    )
};

export default UserId;
