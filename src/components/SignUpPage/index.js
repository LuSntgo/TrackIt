import React, { useState } from "react";
import axios from "axios";
import { Container, StyledLink } from "./style";

import Button from "../Button";
import Input from "../Input";
import BigLogo from "../BigLogo";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSignUp(e){
    e.preventDefault();
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
      email,
      password,
      name,
      image
    });
    promise.then(response=> console.log(response));
    promise.catch(error=> console.log(error.response));
  }
  
  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleSignUp}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="senha"
        />
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="nome"
        />
        <Input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          name="url"
          placeholder="foto"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
