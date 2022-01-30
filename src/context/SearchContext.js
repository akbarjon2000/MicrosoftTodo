import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {

    const [searchText, setSearchText] = useState("");

    return (
        <SearchContext.Provider value={[searchText, setSearchText]} >
            {children}
        </SearchContext.Provider>
    )
};

export default SearchContextProvider;
