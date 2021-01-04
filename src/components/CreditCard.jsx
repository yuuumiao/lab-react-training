import React from 'react'
import "../styles/CreditCard.css"

const CreditCard = (props) => {


    let CreditCardStyle = {
        background: props.bgColor,
        color: props.color
    }

    // modifying the month to two digits
    let modifiedMonth = props.expirationMonth < 10 ? "0" + props.expirationMonth : props.expirationMonth

    // mask the credit card number
    var maskedNumber = '•••• '.repeat(3) + props.number.substr(-4);

    // modifying the credit card type to its logo

    let cardTypeImge

    if (props.type == "Visa") {
        cardTypeImge = "https://augmentit.ch/wp-content/uploads/2019/06/58482363cef1014c0b5e49c1.png"
    } else if (props.type == "Master Card") {
        cardTypeImge = "https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
    }


    return (
        <div className="CreditCard" style={CreditCardStyle}>

            <figure className="CreditCard__type"><img src={cardTypeImge} alt={props.type} /></figure>
            <p className="CreditCard__number">{maskedNumber}</p>

            <div className="CreditCard__dateBank">
                <p>Expires &nbsp;
                <span>{modifiedMonth}</span> /
                <span>{props.expirationYear}</span>

                </p>
                <p> &nbsp; &nbsp;&nbsp;{props.bank}</p>

            </div>

            <p className="CreditCard__owner">{props.owner}</p>


        </div>
    )
}

export default CreditCard
