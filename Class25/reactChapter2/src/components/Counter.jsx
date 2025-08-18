import React from 'react';
import {useState} from 'react';

const Counter = () => {
    const[num,setNum] = useState(0);
    
    let addOne = () =>{
        setNum(num+1)
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={addOne}>Add 1</button>
        </div>
    );
};

export default Counter;