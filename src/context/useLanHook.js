import { useState } from "react";

const useLanHook = () => {

    const [lan,setLan] = useState("en");
    const changeLan = () => {setLan((lan) => lan === "en" ? "hin" :"en")}
 
    return {lan,setLan,changeLan};
}

export default useLanHook;