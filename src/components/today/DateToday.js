import styled from "styled-components";

export default function DateToday(){
    return (
        <Style>
            <Title>Segunda, 17/05</Title>
            <Description>Nenhum hábito concluído ainda</Description>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;

`;

const Title = styled.div`
    color: #126BA5;
`;

const Description = styled.div`
    color: #BABABA;
`;