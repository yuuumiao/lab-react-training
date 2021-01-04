import React from 'react';
import "../styles/Greetings.css";


const Greetings = (props) => {

    let greetingsHello = "Hello";

    if (props.lang == "de") {
        greetingsHello = "Hallo"
    } else if (props.lang == "fr") {
        greetingsHello = "Bonjour"
    }


    return (
        <div className="Greetings">

            {/* <p>{props.lang}</p> */}
            <p>{greetingsHello}</p>
            <p>&nbsp;</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Greetings;
