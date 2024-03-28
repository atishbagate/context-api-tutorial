import { createContext, useState } from "react"; 
import useLanHook from "./useLanHook";

const LanContext = createContext();

export const LangContextProvider = ({children}) => {
    const {lan,changeLan} = useLanHook();
    return (
        <LanContext.Provider 
        value={{lan,changeLan}}
        >
           {children} 
        </LanContext.Provider>
    )
}

export default LanContext;