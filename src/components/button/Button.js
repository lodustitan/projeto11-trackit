import React from "react";
import styled from "styled-components";

/**
 * 
 * @param {*} typeButton "blueButton", "dayButtonUnmarked", "dayButtonMarked", "greenChecked", "greenUnchecked"
 * @returns 
 */
export default function Button({children, width, height, onClick, typeButton, drivenIdentifier}){

    const style = {};

    if(styleData[typeButton]){
        style.background = styleData[typeButton].background; 
        style.color = styleData[typeButton].color;
        style.border = styleData[typeButton].border;
    }

    return (
        <Style 
            data-identifier={drivenIdentifier}
            backgroundColor={style.background}
            color={style.color}
            border={style.border}
            mwidth={width} 
            mheight={height} 
            onClick={onClick}>
            {children}
        </Style>
    );
}
const styleData = {
    blueButton: {background: "dodgerblue", color: "white", border: "none"},
    textButton: {background: "transparent", color: "#52B6FF", border: "none"},
    dayButtonUnmarked: {background: "transparent", color: "#888", border: "2px solid #888"},
    dayButtonMarked: {background: "#888", color: "white", border: "none"},
    greenChecked: {background: "#8FC549", color: "white", border: "none"},
    greenUnchecked: {background: "#E7E7E7", color: "white", border: "none"},
}

const Style = styled.button`
    border-radius: 4.63636px;
    display: flex; 
    justify-content: center;
    align-items: center;
    background: ${ ({backgroundColor})=> backgroundColor ? backgroundColor: "#52B6FF" };
    border: ${ ({border})=> border ? border: "none" };
    font-size: 20px;
    outline: none;
    color: ${ ({color}) => color? color: "white"};
    cursor: pointer;
    width: ${ ({mwidth}) => mwidth };
    height: ${ ({mheight}) => mheight };
`;
