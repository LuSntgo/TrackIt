import React from "react";
import Menu from "../Menu";
import Top from "../Top";
import { Container, History } from "./style";

function HistoryPage() {
  return (
    <>
      <Top />
      <Container>
        <History>
          <h1>Histórico</h1>
          <span>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </span>
        </History>
      </Container>
      <Menu />
    </>
  );
}

export default HistoryPage;
