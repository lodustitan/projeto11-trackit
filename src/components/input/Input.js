import React from "react";
import styled from "styled-components";

export default function Input({children, placeholder, type, width, height, value, onChange}){

    return (
        <Style 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            mwidth={width} 
            mheight={height} 
        />
    );
}

const Style = styled.input`
    background: transparent;
    outline: none;
    border: 2px solid #D4D4D4;
    border-radius: 4.63636px;
    margin-bottom: .5rem;
    width: ${ ({mwidth}) => mwidth };
    height: ${ ({mheight}) => mheight };
    font-size: 20px;
    padding: 10px;
    box-sizing: border-box;
    &::placeholder{
        color: #D4D4D4;
        font-size: 20px;
        padding: 10px;
    }
`;
