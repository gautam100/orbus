import React from 'react';

const Skills = ({skillset}) => {
    return (
        <div>
            {skillset[0]} | {skillset[1]} | {skillset[2]} | {skillset[3]  }
        </div>
    );
};

export default Skills;