import React from "react";
import styled from "styled-components";

import Button from "../button/Button";

export default function HabitToday(){
    return(
        <Style>
            <div>
                <StyleTitle>Ler 1 capitulo de livro</StyleTitle>
                <StyleSmallFont>Sequencia atual: 3 dias</StyleSmallFont>
                <StyleSmallFont>Seu recorde: 5 dias</StyleSmallFont>
            </div>
            <Button typeButton="greenChecked" width="3em" height="3em">ok</Button>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 90%;
    padding: 2rem;
    margin: 1rem 0 0 0;
`;

const StyleTitle = styled.div`
    font-size: 1rem;
`;
const StyleSmallFont = styled.div`
    font-size: 0.7rem;
`;
