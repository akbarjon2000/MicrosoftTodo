import React, { useState, createContext } from "react";

export const MenuContext = createContext();

const Context = ({ children }) => {
    const [hide, setHide] = useState(false);

    return (
        <MenuContext.Provider value={[hide, setHide]}>
            {children}
        </MenuContext.Provider>
    )
}

export default Context
