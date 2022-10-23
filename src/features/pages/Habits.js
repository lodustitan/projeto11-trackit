import React from "react";
import styled from "styled-components";

import MyHabits from "../../components/createhabit/MyHabits";
import CreateHabits from "../../components/createhabit/CreateHabits";
import HabitBox from "../../components/createhabit/HabitBox";

import Header from "../../components/_header/Header";
import Footer from "../../components/_footer/Footer";

export default function Habits(){
    return(
        <Style>
            <Header />
            <Box>
                <MyHabits />
                <CreateHabits />
                <HabitBox />
            </Box>
            <Footer />
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