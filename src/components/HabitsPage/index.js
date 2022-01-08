import React, { useState, useEffect, useContext } from "react";

import Top from "../Top";
import Menu from "../Menu";
import { Container, NewHabit } from "./style";
import { CreateHabit, GetHabits } from "../../services/trackit";
//import UserContext from "../../contexts/UserContext";

export default function HabitsPage({ token }) {
  const [habit, setHabit] = useState([]);
  const [newTask, setNewTask] = useState();
  const [taskName, setTaskName] = useState("");
  const [day, setDay] = useState([]);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    renderHabits();
  }, []);

  function renderHabits() {
    const promise = GetHabits(auth);
    promise.then((response) => setHabit(response.data));
    promise.catch((error) => console.log(error.response));
  }

  function createHabits(e) {
    e.preventDefault();
    setIsLoading();
    const data = { name: taskName, days: day };

    const promise = CreateHabit(data, auth);
    promise.then((response) => {
      renderHabits();
      setIsLoading(false);
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setIsLoading(false);
    });
  }

  return (
    <>
      <Container>
        <Top />
        <NewHabit>
          <h1>Meus hábitos</h1>
          <div onClick={() => alert("funfair")}> +</div>
        </NewHabit>
        <Menu />
      </Container>
    </>
  );
}
