import React, { useState } from "react";
import axios from "axios";
import { Container, StyledLink } from "./style";
import { useNavigate } from "react-router-dom";

import Loading from "../Loading";
import Button from "../Button";
import Input from "../Input";
import BigLogo from "../BigLogo";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email,
        password,
        name,
        avatar,
      }
    );
    promise.then(() => navigate("/"));

    promise.catch(() => {
      alert("Confira seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleSignUp}>
        <Input
          disabled={isLoading}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
        />
        <Input
          disabled={isLoading}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="senha"
        />
        <Input
          disabled={isLoading}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="nome"
        />
        <Input
          disabled={isLoading}
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          name="url"
          placeholder="foto"
        />
        <Button disabled={isLoading} type="submit">
          {isLoading ? <Loading /> : "Cadastrar"}
        </Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
