import React, { useState } from 'react';

const Dropdown = () => {
    const [city,setCity] = useState("Noida")
    return (
        <div>
            City:
            <select defaultValue="Noida" onChange={(e)=>setCity(e.target.value)}>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Banglore">Banglore</option>
                <option value="Mumbai">Mumbai</option>

            </select>
            <div>
                Selected city is {city}
            </div>
        </div>
    );
};

export default Dropdown;