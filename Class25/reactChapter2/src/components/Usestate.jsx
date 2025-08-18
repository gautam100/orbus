import React from 'react';
import {useState} from 'react';

const Usestate = () => {
const[fruit,setFruit] = useState("Banana");

// const changeFruit = ()=>{
//     setFruit("Apple");
//     console.log(fruit);
// }    
//var fruit = "Apple";

    return (
        <div>
            <div>{fruit}</div>
            <button onClick={()=>setFruit('Apple')}>Change Fruit!</button>
        </div>
    );
};

export default Usestate;