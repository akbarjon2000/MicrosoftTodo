import React, { createContext, useState } from 'react'

export const DrawerContext = createContext();

const DrawerContextProvider = ({ children }) => {
    const [drawerIsActive, setDrawerIsActive] = useState({
        open: false,
        id: null,
    });
    return (
        <DrawerContext.Provider value={[drawerIsActive, setDrawerIsActive]}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContextProvider;
