import React from "react";
import "../styles/IdCard.css";

function IdCard(props) {

    // console.log("this is props", props);

    let birthday = props.birth.toDateString();


    return (
        <div className="IdCard">
            <figure><img src={props.picture} alt="profile" /></figure>
            <div className="IdCard__info">
                <p>First name: <span>{props.lastName}</span></p>
                <p>Last name: <span>{props.firstName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height:<span>{props.height}</span></p>
                <p>Birth: <span>{birthday}</span></p>

            </div>

        </div>
    )

}

export default IdCard;