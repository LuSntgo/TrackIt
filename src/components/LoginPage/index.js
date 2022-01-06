import React, { useState } from "react";
import axios from "axios";
import { Container, StyledLink } from "./style";
import Input from "../Input";
import BigLogo from "../BigLogo";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email,
        password,
      }
    );
    promise.then((response) => {
      setToken(response.data.token);
      navigate("/today");
    });

    promise.catch((error) => {
      alert("Confira seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleLogin}>
        <Input
          disabled={isLoading}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        ></Input>
        <Input
          disabled={isLoading}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="senha"
        ></Input>

        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Entrar"}
        </Button>
      </form>
      <StyledLink to="/sign-up">Não possui conta? Cadastre-se</StyledLink>
    </Container>
  );
}

export default LoginPage;