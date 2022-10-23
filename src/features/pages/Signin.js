import React from "react";
import styled from "styled-components";

import logo from "../../assets/img/logo_Trackit.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Redirect from "../../components/textlink/Redirect";

export default function SignIn(){
    return(
        <Style>
            <img src={logo} alt="img" />
            <Forms>
                <Input width="100%" height="46px" placeholder="email" type="email" />
                <Input width="100%" height="46px" placeholder="senha" type="password" />
                <Button width="100%" height="46px">Entrar</Button>
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