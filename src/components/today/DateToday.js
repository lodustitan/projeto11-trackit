import styled from "styled-components";
import { useState } from "react";

const dateMock = [
    {id: 0, name: "Domingo"},
    {id: 1, name: "Segunda"},
    {id: 2, name: "Terça"},
    {id: 3, name: "Quarta"},
    {id: 4, name: "Quinta"},
    {id: 5, name: "Sexta"},
    {id: 6, name: "Sabado"},
]

export default function DateToday(){

    const [date, setDate] = useState( new Date() );

    function getTodayText(){
        let dia;
        dateMock.some(each => {
            if(each.id === date.getDay()) {
                dia = each.name;
            }
        })
        return dia;
    }

    return (
        <Style>
            <Title>{getTodayText()}, {date.getDate()}/{date.getMonth()}</Title>
            <Description>Nenhum hábito concluído ainda</Description>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;

`;

const Title = styled.div`
    color: #126BA5;
`;

const Description = styled.div`
    color: #BABABA;
`;