import React from 'react';
import { useParams } from 'react-router';

const Quiz = () => {
    const { id } = useParams();
    console.log("id",id);
    return (
        <div>
            <h2>Quiz : {id}</h2>
        </div>
    );
};

export default Quiz;