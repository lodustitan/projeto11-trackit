import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import 'react-circular-progressbar/dist/styles.css';

export default function Footer({list}){

    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
        setProgress(list && (
            list
                .map( data => {
                    if(data.done === true) return 1;
                    else return 0;
                })
                .reduce( (val1, val2) => val1 + val2, 0) * 100)/ list.length 
        );
    }, [list])

    return (
        <Style>
            <StyleLink to="/habitos">Hábitos</StyleLink>
            <div className='float'>
                <CircularProgressbarWithChildren  
                    value={progress}
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
                >
                    <StyleLinkWhite to="/">Hoje</StyleLinkWhite>
                </CircularProgressbarWithChildren>
            </div>
            <StyleLink to="/habitos">Histórico</StyleLink>
        </Style>
    );
}

const StyleLink = styled(Link)`
    color: #52B6FF;
    text-decoration: none;
`;
const StyleLinkWhite = styled(Link)`
    color: white;
    text-decoration: none;
`;
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
        top: -40px;
    }
`;