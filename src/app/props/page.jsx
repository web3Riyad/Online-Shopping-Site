

import React from 'react';

const Props  = ({name = "riyad", age = 22}) => {
    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
        </div>
    );
};

export default Props ;