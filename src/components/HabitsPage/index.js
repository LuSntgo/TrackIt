import React, { useState, useEffect, useContext } from "react";

import Top from "../Top";
import Menu from "../Menu";
import Loading from "../Loading";
import { CancelButton, SaveButton } from "../Button";
import { Container, NewHabit, HabitInput, SetDayBox, HabitList } from "./style";
import { CreateHabit, GetHabits, DeletedHabit } from "../../services/trackit";
import UserContext from "../../contexts/UserContext";

export default function HabitsPage() {
  const { token } = useContext(UserContext);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const [habit, setHabit] = useState([]);
  const [pickDay, setPickDay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTask, setNewTask] = useState(false);
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
    const data = { name: taskName, days: pickDay };
    const promise = CreateHabit(data, auth);
    promise.then(() => {
      resetCreateHabit();
      renderHabits();
      setIsLoading(false);
    });
    promise.catch(() => {
      alert("Confira os dados e tente novamente");
      setIsLoading(false);
    });
  }

  function handleDay(myDay) {
    const day = weekDay.find((currentDay) => myDay === currentDay);
    day.selected = !day.selected;
    if (!pickDay.includes(myDay.index)) {
      setPickDay([...pickDay, myDay.index]);
    } else {
      setPickDay(pickDay.filter((d) => d !== myDay.index));
    }
    setWeekDay([...weekDay]);
  }
  function deleteHabit(id) {
    if (window.confirm("Você deseja deletar esse hábito?")) {
      const promise = DeletedHabit(id, auth);
      promise.then(() => renderHabits());
      promise.catch(() => alert("Confira os dados e tente novamente"));
    }
  }

  function resetCreateHabit() {
    setTaskName("");
    setPickDay([]);
    setWeekDay([
      { day: "D", selected: false, index: 0 },
      { day: "S", selected: false, index: 1 },
      { day: "T", selected: false, index: 2 },
      { day: "Q", selected: false, index: 3 },
      { day: "Q", selected: false, index: 4 },
      { day: "S", selected: false, index: 5 },
      { day: "S", selected: false, index: 6 },
    ]);
    setNewTask(false);
  }

  return (
    <>
      <Container>
        <Top />
        <NewHabit>
          <h1>Meus hábitos</h1>
          <div onClick={() => setNewTask(true)}> +</div>
        </NewHabit>
        {newTask && (
          <form onSubmit={createHabits}>
            <div className="nameHabit">
              <HabitInput
                disabled={isLoading}
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                placeholder="nome do hábito"
              ></HabitInput>
            </div>
            <div className="dayHabbit">
              {weekDay.map((day, index) => (
                <SetDayBox
                  key={index}
                  selected={day.selected}
                  onClick={() => handleDay(day)}
                  type="button"
                  disabled={isLoading}
                >
                  {day.day}
                </SetDayBox>
              ))}
            </div>

            <div className="buttonHabit">
              <CancelButton
                onClick={() => setNewTask(false)}
                disabled={isLoading}
                type="button"
              >
                {isLoading ? <Loading /> : "Cancelar"}
              </CancelButton>
              <SaveButton disabled={isLoading} type="submit">
                {isLoading ? <Loading /> : "Salvar"}
              </SaveButton>
              )
            </div>
          </form>
        )}

        {habit.length === 0 ? (
          <span>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </span>
        ) : (
          habit.map((habit) => (
            <HabitList key={habit.id}>
              <p>{habit.name}</p>
              <ion-icon
                onClick={() => deleteHabit(habit.id)}
                name="trash-outline"
              ></ion-icon>
              <div className="dayHabbit">
                {weekDay.map((day, index) => (
                  <SetDayBox
                    key={index}
                    selected={habit.days.includes(index) ? true : false}
                  >
                    {day.day}
                  </SetDayBox>
                ))}
              </div>
            </HabitList>
          ))
        )}
        <Menu />
      </Container>
    </>
  );
}
