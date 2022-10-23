import styled from "styled-components";

import Button from "../button/Button";

export default function HabitBox(){
    return (
        <Style>
            <div>Ler 1 capítulo de livro</div>
            <div>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">D</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
                <Button typeButton="dayButtonMarked" width="2rem" height="2rem">T</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">Q</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">Q</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
                <Button typeButton="dayButtonUnmarked" width="2rem" height="2rem">S</Button>
            </div>

        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 8em;
    padding: 2rem;
    margin: 1rem 0;
    background-color: #FFF;
`;