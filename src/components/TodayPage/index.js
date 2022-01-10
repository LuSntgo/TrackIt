import { useState, useEffect, useContext } from "react";
import { getToday, markHabit } from "../../services/trackit";
import dayjs from "dayjs";

import Top from "../Top";
import Menu from "../Menu";

import { Container, Percentage } from "./style";
import UserContext from "../../contexts/UserContext";
import HabitTrack from "../HabitTrack";
import LoadingPage from "../LoadingPage";

export default function TodayPage() {
  const [habits, setHabits] = useState(null);
  const { token, progress, setProgress } = useContext(UserContext);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  const WeekDay = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    renderTodayPage();
  }, []);
  if (habits === null) {
    return (
      <>
        <Top />
        <LoadingPage />
        <Menu />
      </>
    );
  }

  function renderTodayPage() {
    const promise = getToday(auth);
    promise.then((response) => {
      setHabits(response.data);
      setProgress(() => percentageCounter(response.data));
      promise.catch((error) => console.log(error.response));
    });
  }

  function handleHabit(id, done) {
    const promise = markHabit(id, done, auth);
    promise.then(renderTodayPage);
    promise.catch((error) => alert(error.response.data.message));
  }
  if (habits === null) {
    return <div></div>;
  }

  function percentageCounter(habitsDaily) {
    let counter = 0;
    for (let i = 0; i < habitsDaily.length; i++) {
      if (habitsDaily[i].done) {
        counter++;
      }
    }
    const total = ((counter * 100) / habitsDaily.length).toFixed();
    return total;
  }

  return (
    <>
      <Top />
      <Container>
        <span className="weekday-title">
          {WeekDay[dayjs().day()]},{" "}
          {dayjs().date() < 10 ? `0${dayjs().date()}` : dayjs().date()}/
          {dayjs().month() + 1 < 10
            ? `0${dayjs().month() + 1}`
            : dayjs().month() + 1}
        </span>
        <Percentage progress={progress}>
          {progress > 0
            ? `${progress}% de hábitos concluídos`
            : "Nenhum hábito concluído ainda"}
        </Percentage>
        <div className="task">
          {habits.map((h) => (
            <HabitTrack key={h.id} h={h} handleHabit={handleHabit} />
          ))}
        </div>
      </Container>
      <Menu />
    </>
  );
}
