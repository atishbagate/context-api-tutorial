import { createContext, useState } from "react"; 

const LanContext = createContext();

export const LangContextProvider = ({children}) => {
    const [lan,setLan] = useState("en");

    const changeLan = () => {setLan((lan) => lan === "en" ? "hin" :"en")}

    return (
        <LanContext.Provider 
        value={{lan,changeLan}}
        >
           {children} 
        </LanContext.Provider>
    )
}

export default LanContext;