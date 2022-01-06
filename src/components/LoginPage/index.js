import React, { useState } from "react";
import Input from "../Input";
import { BigLogo, Container, StyledLink } from "./style";
import biglogo from "../../assets/biglogo.png"
import Button from "../Button";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <BigLogo src={biglogo} alt="big-logo" />
      <form>
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
