import React from 'react';

const Child = ({showName, name}) => {
    
    return (
        <div>
            {name}
            <button onClick={()=>showName(name)}>Show Name</button>
        </div>
    );
};

export default Child;