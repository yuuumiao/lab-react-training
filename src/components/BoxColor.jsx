import React from 'react';
import "../styles/BoxColor.css";

const BoxColor = (props) => {



    let BoxColorStyle = {
        background: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')'
    }


    //RGB to HEX //

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }


    let hexColor = "FFFFFF"
    hexColor = rgbToHex(props.r, props.g, props.b)


    //RGB to HEX //


    return (
        <div className="BoxColor" style={BoxColorStyle} >
            <p>rgb(
            <span>{props.r}</span>,
            <span>{props.g}</span>,
            <span>{props.b}</span>
)</p>
            <p>{hexColor}</p>
        </div>
    )
}

export default BoxColor
