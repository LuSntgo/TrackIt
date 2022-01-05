import React, { useState} from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <Container>
        <h1>TrackIt</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button onClick={() => alert(`Email: ${email}, Senha:  ${password}`)}>
          Entrar
        </button>
        <Link to="/sign-up">Não possui conta? Cadastre-se</Link>
      </Container>
    );
  }
  
  export default LoginPage;