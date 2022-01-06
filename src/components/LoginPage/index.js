import React, { useState } from "react";
import axios from "axios";
import { Container, StyledLink } from "./style";
import Input from "../Input";
import BigLogo from "../BigLogo";
import Button from "../Button";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
    e.preventDefault();
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
      email,
      password
       });
    promise.then(response=> console.log(response));
    promise.catch(error=> console.log(error.response));
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleLogin}>
      <Input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="email"
      ></Input>
      <Input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="senha"
      ></Input>
      <Button type="submit" onClick={() => alert(`Email: ${email}, Senha:  ${password}`)}>
        Entrar
      </Button>
      </form>
      <StyledLink to="/sign-up">Não possui conta? Cadastre-se</StyledLink>
    </Container>
  );
}

export default LoginPage;

//disabled={true}