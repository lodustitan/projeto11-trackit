import { useContext } from "react";
import styled from "styled-components";

import Header from "../../components/_header/Header";
import Footer from "../../components/_footer/Footer";

import { globalVars } from "../../App";

export default function History(){
    
    const { todayList } = useContext(globalVars);
    
    return (
        <Style>
            <Header />
            <Box>
                <Title>Histórico</Title>
                <Description>Em breve você poderá ver o histórico dos seus hábitos aqui!</Description>
            </Box>
            <Footer list={todayList} />
        </Style>
    );
}

const Title = styled.div`
    font-size: 1.5rem;
    color: #126BA5;
    width: 100%;
`;
const Description = styled.div`
    color: #666;
`;

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
    padding: 1rem;
    height: calc(100% - 140px);
    background-color: #9992;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 0;
    }
`;