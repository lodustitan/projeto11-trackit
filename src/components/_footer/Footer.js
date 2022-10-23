import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styled from 'styled-components';

export default function Footer(){
    return (
        <Style>
            <span>Hábitos</span>
            <div className='float'>
                <CircularProgressbar 
                    value={23}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    strokeWidth={9}
                    styles={buildStyles({
                        rotation: 0.25,
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `#fff`,
                        textColor: '#fff',
                        trailColor: '#0000',
                        backgroundColor: '#52B6FF',
                    })}
                />
            </div>
            <span>Histórico</span>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: #52B6FF;
    position: relative;
    height: 70px;
    width: 100%;

    .float{
        width: 96px;
        position: absolute;
        left: calc(50% - 48px);
        top: -50px;
    }
`;