import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext()

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    // fetch chefs data
    const chefsData = async () => {
        const response = await fetch("https://foodie-server-shaikatpal56-gmailcom.vercel.app/chefs");
        const data = await response.json();
    
        // console.log(data);
        setData(data);
        setLoading(false);
      };

      useEffect(() => {
        setLoading(true);
        chefsData();
      }, []);

    return (
        <Context.Provider value={{loading, data}}>{children}</Context.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Context)
}

export {useGlobalContext, ContextProvider};