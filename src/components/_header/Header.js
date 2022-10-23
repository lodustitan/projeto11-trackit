import { useState } from "react";
import styled from "styled-components";

export default function Header(){
    return (
        <Style>
            TrakIt
        </Style>
    );
}

const Style = styled.div`
    width: 100%;
    height: 70px;
    background-color: dodgerblue;
    color: #eee;
`;
