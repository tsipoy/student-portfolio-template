import React, { useState, useEffect } from "react";
import websiteData from "./websiteData.json";

const Context = React.createContext();

function ContextProvider({children}) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(websiteData)
    }, [])

    return(
        <Context.Provider value={{data}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}