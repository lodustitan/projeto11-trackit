import { useState } from "react";
import styled from "styled-components";
import axios from "../../configs/http";

import logo from "../../assets/img/logo_Trackit.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Redirect from "../../components/textlink/Redirect";

export default function SignUp() {
  const [inputIEmail, setIEmail] = useState();
  const [inputIName, setIName] = useState();
  const [inputIImage, setIImage] = useState();
  const [inputIPassword, setIPassword] = useState();

  function register() {
    if (!inputIEmail || !inputIImage || !inputIName || !inputIPassword){
        return window.alert("Os campos precisam ser preenchidos corretamente!");
    }

    axios
        .post("/auth/sign-up", {
            email: inputIEmail,
            name: inputIName,
            image: inputIImage,
            password: inputIPassword,
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
  }

  return (
    <Style>
        <img src={logo} alt="img" />
        <Forms>
            <Input
                drivenIdentifier="input-email"
                width="100%"
                height="46px"
                placeholder="email"
                type="email"
                onChange={(e) => setIEmail(e.target.value)}
                value={inputIEmail}
            />
            <Input
                drivenIdentifier="input-password"
                width="100%"
                height="46px"
                placeholder="senha"
                type="password"
                onChange={(e) => setIPassword(e.target.value)}
                value={inputIPassword}
            />
            <Input
                drivenIdentifier="input-name"
                width="100%"
                height="46px"
                placeholder="nome"
                type="text"
                onChange={(e) => setIName(e.target.value)}
                value={inputIName}
            />
            <Input
                drivenIdentifier="input-photo"
                width="100%"
                height="46px"
                placeholder="foto"
                type="url"
                onChange={(e) => setIImage(e.target.value)}
                value={inputIImage}
            />
            <Button 
                drivenIdentifier="input-email"
                width="100%" 
                height="46px" 
                onClick={register}>
                Cadastrar
            </Button>
            <Redirect drivenIdentifier="back-to-login-action" to="/">J?? tem uma conta? Fa??a login!</Redirect>
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
