import { useState, useEffect, useContext } from "react";
import { useLocalStorage } from "../../utils/hook_localStorage";
import styled from "styled-components";
import axios from "../../configs/http";

import HabitToday from "../../components/habit/HabitToday";
import DateToday from "../../components/today/DateToday";

import Header from "../../components/_header/Header";
import Footer from "../../components/_footer/Footer";

import { globalVars } from "../../App";

export default function Today(){

    const { todayList, setTodayList } = useContext(globalVars);
    const [ localStg ] = useLocalStorage("data");
    
    function refreshTodayTasks(){
        axios.get("/habits/today", {headers: {Authorization: `Bearer ${localStg.token}`}})
        .then( res => setTodayList(res.data) )
        .catch( err => console.error(err) );
    }

    useEffect(() => {
        refreshTodayTasks();
    }, [])

    return(
        <Style>
            <Header />
            <Box>
                <DateToday />
                {todayList && todayList.map((data, index) => {
                    return <HabitToday 
                        key={index} 
                        uid={data.id}   
                        done={data.done} 
                        name={data.name} 
                        currentSequence={data.currentSequence} 
                        highestSequence={data.highestSequence} 
                        refreshTodayTasks={refreshTodayTasks} 
                    />;
                })}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100% - 140px);
    background-color: #9992;
`;