import { useState, useEffect } from "react";
import { useLocalStorage } from "../../utils/hook_localStorage";
import styled from "styled-components";
import axios from "../../configs/http";

import Button from "../button/Button";

export default function HabitToday({name, done, currentSequence, highestSequence, uid, refreshTodayTasks}){

    // BHT -> Button HabitToday
    const [ selectedBHT, setSelectBHT ] = useState(done);
    const [ canBeClicked, setCanBeClicked] = useState(true);
    const [ localStg ] = useLocalStorage("data");

    function toggleTask(){
        if(!canBeClicked) return;
        
        let handler;

        if(selectedBHT) handler = "uncheck";
        else handler = "check";
        
        setCanBeClicked(false);
        setSelectBHT(!selectedBHT);

        axios.post(`/habits/${uid}/${handler}`, null, {headers: {Authorization: `Bearer ${localStg.token}`}})
        .then(res => {
            console.log(res);
            setCanBeClicked(true);
            refreshTodayTasks();
        })
        .catch(err => {
            console.error(err);
            setCanBeClicked(true);
        });
    }

    return(
        <Style data-identifier="today-infos">
            <div>
                <StyleTitle>{name}</StyleTitle>
                <StyleSmallFont>Sequencia atual: {currentSequence} dias</StyleSmallFont>
                <StyleSmallFont>Seu recorde: {highestSequence} dias</StyleSmallFont>
            </div>
            <Button 
                drivenIdentifier="done-habit-btn"
                onClick={toggleTask}
                typeButton={selectedBHT? "greenChecked": "greenUnchecked"} 
                width="3em" 
                height="3em">ok</Button>
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
