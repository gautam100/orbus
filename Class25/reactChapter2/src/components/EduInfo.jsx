import React from 'react';

const EduInfo = ({qualification}) => {
    return (
        <div>
            {qualification.higestEdu} <br />
            {qualification.score}
        </div>
    );
};

export default EduInfo;