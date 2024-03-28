import React, { useContext } from 'react'
import LanContext from '../context/LanContext';

function LanChange() {
    const { lan, changeLan } = useContext(LanContext);
    return (
        <div>
            <hr />
            <p>Language : {lan}</p>
            <button onClick={changeLan}>Language Change</button>
        </div>
    )
}

export default LanChange