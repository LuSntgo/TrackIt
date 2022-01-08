import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Top from "../Top";
import Menu from "../Menu";
import Container from "./style";
import UserContext from "../../contexts/UserContext";

export default function HabitsPage({ token }) {
  const [items, setItems] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => setItems(response.data));
    promise.catch((error) => console.log(error.response));
  }, []);

  return (
    <Container>
      <Top />
      <spam>Meus hábitos</spam>
      <Menu />
    </Container>
  );
}
