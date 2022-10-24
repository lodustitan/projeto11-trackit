import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../configs/http";
import { useLocalStorage } from "../../utils/hook_localStorage";

import logo from "../../assets/img/logo_Trackit.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Redirect from "../../components/textlink/Redirect";

export default function SignIn(){

    const [inputIEmail, setIEmail] = useState();
    const [inputIPassword, setIPassword] = useState();
    const [localStg, setLocalStg] = useLocalStorage("data");

    const navigate = useNavigate();

    useEffect(() => {
        if(localStg) return navigate("/hoje");
    }, [localStg])

    function login(){
        if(!inputIEmail || !inputIPassword) return window.alert("Os campos precisam ser preenchidos corretamente!");

        axios.post("/auth/login", {
            email: inputIEmail,
            password: inputIPassword
        })
        .then(res => setLocalStg(res.data))
        .catch(err => console.error(err))
    }

    return(
        <Style>
            <img src={logo} alt="img" />
            <Forms>
                <Input width="100%" height="46px" placeholder="email" type="email" onChange={ e => setIEmail(e.target.value)    } value={ inputIEmail } />
                <Input width="100%" height="46px" placeholder="senha" type="password" onChange={ e => setIPassword(e.target.value) } value={ inputIPassword } />
                <Button width="100%" height="46px" onClick={login}>Entrar</Button>
                <Redirect to="/cadastro">Não tem uma conta? Cadastre-se!</Redirect>
            </Forms>
        </Style>
    );
} 

const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`;

const Forms = styled.div`
    width: 85%;
`;