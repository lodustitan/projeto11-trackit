import React from "react";
import styled from "styled-components";

/**
 * 
 * @param {*} typeButton "blueButton", "dayButtonUnmarked", "dayButtonMarked"
 * @returns 
 */
export default function Button({children, width, height, click, typeButton}){

    const [buttonType, setButtonType] = React.useState(typeButton || "blueButton");
    const style = new Object();

    if(buttonType === "blueButton"){
        style.background = "dodgerblue"; 
        style.color = "white";
        style.border = "none";
    } else if(buttonType === "textButton"){
        style.background = "transparent"; 
        style.color = "#52B6FF";
        style.border = "none";
    } else if(buttonType === "dayButtonUnmarked"){
        style.background = "transparent";
        style.color = "#888";
        style.border = "2px solid #888";
    } else if(buttonType === "dayButtonMarked"){
        style.background = "#888";
        style.color = "white";
        style.border = "none";
    } else if(buttonType === "greenChecked"){
        style.background = "#8FC549";
        style.color = "white";
        style.border = "none";
    } else if(buttonType === "greenUnchecked"){
        style.background = "#E7E7E7";
        style.color = "white";
        style.border = "none";
    }

    return (
        <Style 
            backgroundColor={style.background}
            color={style.color}
            border={style.border}
            mwidth={width} 
            mheight={height} 
            onClick={click}>
            {children}
        </Style>
    );
}

const Style = styled.button`
    border-radius: 4.63636px;
    background: ${ ({backgroundColor})=> backgroundColor ? backgroundColor: "#52B6FF" };
    border: ${ ({border})=> border ? border: "none" };
    font-size: 20px;
    outline: none;
    color: ${ ({color}) => color? color: "white"};
    cursor: pointer;
    width: ${ ({mwidth}) => mwidth };
    height: ${ ({mheight}) => mheight };
`;
