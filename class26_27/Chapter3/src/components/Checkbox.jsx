import React, { useState } from "react";

const Checkbox = () => {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) =>{
    console.log(event.target.checked);
    console.log(event.target.value);
    if(event.target.checked){
        setSkills([...skills,event.target.value])
    }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }


  return (
    <div>
      <h1>Skills</h1>
      <input type="checkbox" id="php" value="PHP" onChange={handleSkills} /> PHP
      <br />
      <input type="checkbox" id="node" value="node" onChange={handleSkills} /> Node
      <br />
      <input type="checkbox" id="go" value="Go" onChange={handleSkills} /> Go Lang
      <br />
      <input type="checkbox" id="java" value="Java" onChange={handleSkills} /> Java
      <br />
      {skills.toString()}
    </div>
  );
};

export default Checkbox;
