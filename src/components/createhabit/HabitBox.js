import { useLocalStorage } from "../../utils/hook_localStorage";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "../../configs/http";


import Button from "../button/Button";

const dayList = [
    {name: "S", id: 1},
    {name: "T", id: 2},
    {name: "Q", id: 3},
    {name: "Q", id: 4},
    {name: "S", id: 5},
    {name: "S", id: 6},
    {name: "D", id: 7},
];

export default function HabitBox({uid, name, days, refreshHabitList}){

    const [ localStg ] = useLocalStorage("data");

    function isChecked(condission){
        if(condission) return "dayButtonMarked";
        else return "dayButtonUnmarked";
    }
    
    function deleteHabit(){
        axios.delete(`/habits/${uid}`, {headers: {Authorization: `Bearer ${localStg.token}`}})
        .then(res => {
            console.log(res);
            refreshHabitList();
        })
        .catch(err => console.error(err));
    }

    return (
        <Style>
            <Float onClick={deleteHabit} data-identifier="delete-habit-btn">
                <BsTrash />
            </Float>
            <div data-identifier="habit-name">{name}</div>
            <div>
                {dayList.map( (each, index) => {
                    return <Button 
                        key={index} 
                        typeButton={days.includes(each.id)? isChecked(true): isChecked(false)} 
                        width="2rem" 
                        height="2rem">{each.name}</Button>
                })}
            </div>

        </Style>
    );
}

const Style = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    height: 8rem;
    padding: 2rem 1rem;
    margin: 1rem 0;
    background-color: #FFF;
    div{
        display: flex;
    }
`;
const Float = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
`;