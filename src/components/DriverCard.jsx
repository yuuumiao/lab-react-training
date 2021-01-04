import React from 'react'
import Rating from './Rating'
import "../styles/DriverCard.css"

const DriverCard = (props) => {

    // console.log(props)

    return (
        <div className="DriverCard">


            <div className="imgCropper"><img src={props.img} alt={props.name} /></div>
            <div className="DriverCard__info">
                <p className="DriverCard__title">{props.name}</p>

                <Rating>{props.rating}</Rating>

                <p>{props.car.model}&nbsp; &nbsp;&nbsp;{props.car.licensePlate}</p>

            </div>


        </div>
    )
}

export default DriverCard
