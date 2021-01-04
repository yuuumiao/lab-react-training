import React from 'react';
import "../styles/Random.css";

const Random = (props) => {

    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);

    return (
        <div className="Random">

            <p>Random value between <span>{props.min}</span> and <span>{props.max}</span> => <span>{randomNumber}</span> </p>

        </div>
    )
}

export default Random;
