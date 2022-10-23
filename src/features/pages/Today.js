import React from "react";
import styled from "styled-components";

import HabitToday from "../../components/habit/HabitToday";
import DateToday from "../../components/today/DateToday";

import Header from "../../components/_header/Header";
import Footer from "../../components/_footer/Footer";

export default function Today(){
    return(
        <Style>
            <Header />
            <Box>
                <DateToday />
                <HabitToday />
                <HabitToday />
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