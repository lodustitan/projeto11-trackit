import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Redirect({children, to}){
    return (
        <Style>
            <Link to={to}>
                {children}
            </Link>
        </Style>
    );
}

const Style = styled.div`
    text-align: center;
    font-size: 1rem;
    a { 
        text-decoration: underline;
        color: #52B6FF;
    }
`;