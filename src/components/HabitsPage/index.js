import React, { useState, useEffect, useContext } from "react";

import Top from "../Top";
import Menu from "../Menu";
import Loading from "../Loading";
import { CancelButton, SaveButton } from "../Button";
import { Container, NewHabit, HabitInput, SetDayBox } from "./style";
import { CreateHabit, GetHabits } from "../../services/trackit";
//import UserContext from "../../contexts/UserContext";

export default function HabitsPage({ token }) {
  const [habit, setHabit] = useState([]);
  const [newTask, setNewTask] = useState();
  const [taskName, setTaskName] = useState("");
  const [weekDay, setWeekDay] = useState([
    { day: "D", selected: false, index: 0 },
    { day: "S", selected: false, index: 1 },
    { day: "T", selected: false, index: 2 },
    { day: "Q", selected: false, index: 3 },
    { day: "Q", selected: false, index: 4 },
    { day: "S", selected: false, index: 5 },
    { day: "S", selected: false, index: 6 },
  ]);
  const [day, setDay] = useState([]);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const [isLoading, setIsLoading] = useState(false);

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
      alert("Confira os dados e tente novamente");
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
        <form>
          <div className="nameHabit">
            <HabitInput
              disabled={isLoading}
              type="email"
              onChange={(e) => setDay(e.target.value)}
              value={day}
              placeholder="nome do hábito"
            ></HabitInput>
          </div>
          <div className="dayHabbit">
            {weekDay.map((day, index) => (
              <SetDayBox
                key={index}
                selected={day.selected}
                type="button"
                disabled={isLoading}
                onClick={() => alert("day")}
              >
                {day.day}
              </SetDayBox>
            ))}
          </div>
          <div className="buttonHabit">
            <CancelButton disabled={isLoading} type="submit">
              {isLoading ? <Loading /> : "Cancelar"}
            </CancelButton>
            <SaveButton disabled={isLoading} type="submit">
              {isLoading ? <Loading /> : "Salvar"}
            </SaveButton>
          </div>
        </form>
        <Menu />
      </Container>
    </>
  );
}
