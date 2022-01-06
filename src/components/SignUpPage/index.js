import React, { useState } from "react";
import { Container, StyledLink } from "./style";
import Button from "../Button";
import Input from "../Input";
import BigLogo from "../BigLogo";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <Container>
     <BigLogo />
      <form>
        <Input
          type="email"
          value={email}
                onChange={(e)=> setEmail(e.target.value)} 
          name="email"
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
                onChange={(e)=> setPassword(e.target.value)} 
          name="password"
          placeholder="senha"
        />
        <Input
          type="text"
          value={name}
                onChange={(e)=> setName(e.target.value)} 
          name="name"
          placeholder="nome"
        />
        <Input
          type="url"
          value={image}
                onChange={(e)=> setImage(e.target.value)} 
          name="url"
          placeholder="foto"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
