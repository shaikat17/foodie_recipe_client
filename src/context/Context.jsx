import React, { createContext, useContext, useState } from 'react';

const Context = createContext()

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    return (
        <Context.Provider value={{loading, setLoading}}>{children}</Context.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Context)
}

export {useGlobalContext, ContextProvider};