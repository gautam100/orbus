import React, { useRef } from 'react';
import Forwardref from './Forwardref';

const Ref = () => {
    const nameRef = useRef(null)
    const updateInp = () =>{
        nameRef.current.value = nameRef.current.value.toUpperCase(); 
    }
    return (
        <div>
            <h1>forwardRef</h1>
            <Forwardref ref={nameRef} />
            <button onClick={updateInp}>Update In Uppercase</button>
        </div>
    );
};

export default Ref;