import styled from "styled-components";
import { useState, useContext } from "react";
import { globalVars } from "../../App";

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

    const [ date, setDate ] = useState( new Date() );
    const { todayList } = useContext(globalVars);

    function getTodayText(){
        let dia;
        dateMock.some(each => {
            if(each.id === date.getDay()) {
                dia = each.name;
            }
        })
        return dia;
    }

    function getProgressPercent(){
        return parseInt((todayList
            .map( data => {
                if(data.done === true) return 1;
                else return 0;
            })
            .reduce( (val1, val2) => val1 + val2, 0) * 100)/ todayList.length) 
    }
    
    return (
        <Style>
            <Title data-identifier="today-infos">{getTodayText()}, {date.getDate()}/{date.getMonth()}</Title>
            <Description 
                data-identifier="today-infos"
                todayList={todayList} 
                getProgressPercent={getProgressPercent}>
                    {todayList? 
                        getProgressPercent()+ "% dos hábitos concluídos":
                        "Nenhum hábito concluído ainda"}
            </Description>
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
    color: ${({todayList, getProgressPercent}) => {
        return todayList && (getProgressPercent() > 0) ? "#8FC549": "#BABABA";
    }};
`;