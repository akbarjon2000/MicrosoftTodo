import React, { useState, createContext } from 'react';

export const UserIdContext = createContext();

const UserId = ({ children }) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.user).id);
    return (
        <UserIdContext.Provider value={userId}>
            {children}
        </UserIdContext.Provider>
    )
};

export default UserId;
