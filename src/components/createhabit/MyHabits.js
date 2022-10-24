import styled from "styled-components";

import Button from "../button/Button";

export default function MyHabits({toggleShowCreateHabit}){
    return (
        <Style>
            <span>Meus hábitos</span>
            <Button drivenIdentifier="create-habit-btn" width="2rem" height="2rem" onClick={() => toggleShowCreateHabit(true)}>+</Button>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    margin: 2rem 0;
    color: #126BA5;
    font-size: 1.2rem;
`;