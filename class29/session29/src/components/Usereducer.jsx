import React, { useReducer } from 'react';

const Usereducer = () => {

    const reducer = (state,action) =>{
        if(action === 'add'){
            return state + 1
        }else if(action === 'sub'){
            return state -1
        }

    }
    const [count, dispatch1] = useReducer(reducer,100)

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>dispatch1('add')}>Increase</button>
            <button onClick={()=>dispatch1('sub')}>Decrease</button>
        </div>
    );
};

export default Usereducer;