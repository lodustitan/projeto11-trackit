import styled from "styled-components";

import Input from "../input/Input";
import Button from "../button/Button";

export default function CreateHabits(){
    return (
        <Style>
            <div>
                <Input placeholder="nome do hábito" width="100%"/>
            </div>
            <div>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">D</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
                <Button typeButton="dayButtonMarked" width="2rem" height="2rem">T</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">Q</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">Q</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
            </div>
            <ButtonLabel>
                <div>
                    <Button typeButton="textButton" width="4em" height="2rem">Cancelar</Button>
                    <Button typeButton="blueButton" width="4em" height="2rem">Salvar</Button>
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
    height: 14em;
    padding: 2rem;
    background-color: #FFF;
`;
const ButtonLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    div{
        display: flex;
        justify-content: space-around;
        width: 50%;
    }
`;
