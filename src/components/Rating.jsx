import React from 'react'

export const Rating = (props) => {


    let roundedNumber = Math.round(props.children)
    let stars = '★'.repeat(roundedNumber) + '☆'.repeat(5-roundedNumber) 



    return (
        <div>
        {stars}
            
        </div>
    )
}

export default Rating;
