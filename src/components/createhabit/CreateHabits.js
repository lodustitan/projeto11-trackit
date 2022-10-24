import { useState } from "react";
import { useLocalStorage } from "../../utils/hook_localStorage";
import styled from "styled-components";
import axios from "../../configs/http";

import Input from "../input/Input";
import Button from "../button/Button";

const dayList = [
    {name: "S", id: 0},
    {name: "T", id: 1},
    {name: "Q", id: 2},
    {name: "Q", id: 3},
    {name: "S", id: 4},
    {name: "S", id: 5},
    {name: "D", id: 6},
];

export default function CreateHabits({toggleShowCreateHabit, refreshHabitList}){

    const [ habitName, setHabitName ] = useState();
    const [ selectedDays, setSelectedDays ] = useState([]);
    const [ localStg, setLocalStg ] = useLocalStorage("data");


    function requestCreationHabit(){
        axios.post("/habits", {name: habitName, days: selectedDays}, {headers:{Authorization: `Bearer ${localStg.token}`}})
        .then(res => {
            console.log(res);
            refreshHabitList()
        })
        .catch(err => console.error(err))
    }

    function selectDay(day){
        if(selectedDays.includes(day)) {
            return setSelectedDays( selectedDays.filter(data => data !== day) )
        }
        const oldArr = [...selectedDays, day];
        return setSelectedDays( oldArr );
    }

    function isChecked(condission){
        if(condission) return "dayButtonMarked"
        else return "dayButtonUnmarked"
    }

    return (
        <Style>
            <div>
                <Input drivenIdentifier="input-habit-name" placeholder="nome do hábito" width="100%" onChange={e => setHabitName(e.target.value)} value={habitName} />
            </div>
            <div>
                {dayList.map( (each, index) => {
                    return (
                        <Button
                            drivenIdentifier="week-day-btn" 
                            key={index}
                            onClick={() => selectDay(each.id)}
                            typeButton={selectedDays.includes(each.id)? isChecked(true): isChecked(false)} 
                            width="2rem" 
                            height="2rem">{each.name}</Button>
                    )} 
                )}
            </div>
            <ButtonLabel>
                <div>
                    <Button drivenIdentifier="cancel-habit-create-btn" typeButton="textButton" height="2rem" onClick={() => toggleShowCreateHabit(false)}>Cancelar</Button>
                    <Button drivenIdentifier="save-habit-create-btn" typeButton="blueButton" width="4rem" height="2rem" onClick={requestCreationHabit}>Salvar</Button>
                </div>
            </ButtonLabel>
        </Style>
    )
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 14rem;
    padding: 1.5rem 1rem;
    background-color: #FFF;
`;
const ButtonLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    div{
        display: flex;
        justify-content: flex-end;
    }
`;
