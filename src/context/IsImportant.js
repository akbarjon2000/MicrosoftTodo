import React, { useState, createContext } from 'react';

const IsImportantContext = createContext();

const IsImportantContextProvider = ({ children }) => {
    const [isImportant, setIsImportant] = useState(false);
    return <IsImportantContext.Provider value={[isImportant, setIsImportant]}>
        {children}
    </IsImportantContext.Provider>;
};

export default IsImportantContextProvider;
