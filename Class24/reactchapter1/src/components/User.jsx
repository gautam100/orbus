import React from 'react';
import profileImg from '../assets/angular.jpg';

const User = () => {
    const title = "Sr. MERN Developer";
    const skills = ["JS","React","Angular"];
    const specialization = {
        primary: "Developer",
        secondary: "Project Manager"
    }
    function framework(item){
        alert(item + " Clicked!")
    }
    return (
        <div>
            <h1>User Profile</h1>
            <img src={profileImg} alt="Profile Picture" width="250" height="210" />
            <ul>
                <li>{title}</li>
                <li>{skills[0]} | {skills[1]} | {skills[2]}</li>
                <li>
                    {specialization.primary} | {specialization.secondary}
                </li>
            </ul>
            <button onClick={()=>framework('Angular')}>Angular</button>
            <button onClick={()=>framework('Vue')}>Vue</button>

        </div>
    );
};

export default User;