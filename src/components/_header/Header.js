import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/icons/miniLogo_Trackit.png"
import { useLocalStorage } from "../../utils/hook_localStorage";


export default function Header(){

    const [localStg, setLocalStg] = useLocalStorage("data");

    console.log(localStg)
    return (
        <Style>
            <div>
                <StyleImg src={ logo } alt="trackit" />
            </div>
            <div>
                <StyleImgProfile src={ localStg.image } alt="profile"/>
            </div>
        </Style>
    );
}

const Style = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 1em;
    background-color: dodgerblue;
    color: #eee;
`;
const StyleImg = styled.img`
    width: initial;
`;
const StyleImgProfile = styled.img`
    border-radius: 50%;
    width: 3em;
    height: 3em;
`;