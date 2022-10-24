import { useLocalStorage } from "../../utils/hook_localStorage";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "../../configs/http";

import MyHabits from "../../components/createhabit/MyHabits";
import CreateHabits from "../../components/createhabit/CreateHabits";
import HabitBox from "../../components/createhabit/HabitBox";

import Header from "../../components/_header/Header";
import Footer from "../../components/_footer/Footer";

import { globalVars } from "../../App";

export default function Habits(){

    const { todayList, setTodayList } = useContext(globalVars);
    const [ myHabitList, setMyHabitList ] = useState();
    const [ showCreateHabit, setShowCreateHabit ] = useState();
    const [ localStg, setLocalStg ] = useLocalStorage("data");

    useEffect(()=>{
        refreshHabitList()
    }, []);

    function refreshHabitList(){
        axios.get("/habits", {headers: {Authorization: `Bearer ${localStg.token}`}})
        .then(res => {
            if(res.data.length > 0){
                setMyHabitList(res.data);
            }else{
                setMyHabitList();
            }
        })
        .catch(err => console.error(err));
    }

    function toggleShowCreateHabit(toggle){
        setShowCreateHabit(toggle);
    }

    return(
        <Style>
            <Header />
            <Box>
                <MyHabits toggleShowCreateHabit={toggleShowCreateHabit} />
                {showCreateHabit && <CreateHabits toggleShowCreateHabit={toggleShowCreateHabit} refreshHabitList={refreshHabitList} />}
                {(myHabitList)? 
                    myHabitList.map((data, index) => {
                        return <HabitBox key={index} uid={data.id} name={data.name} days={data.days} refreshHabitList={refreshHabitList} />
                    }): 
                    <div className="habit" data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
                }
            </Box>
            <Footer list={todayList} />
        </Style>
    );
} 

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;
const Box = styled.div`
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% - 140px);
    background-color: #9992;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 0;
    }
    .habit{
        padding: 1rem;
        color: #666;
    }
`;