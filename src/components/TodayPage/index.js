import { useState, useEffect, useContext } from "react";
import { GetToday } from "../../services/trackit";
import dayjs from "dayjs";

//import Loading from '../Loading'
import Top from "../Top";
import Menu from "../Menu";
import Container from "./style";
import UserContext from "../../contexts/UserContext";

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
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    renderTodayPage();
  }, []);

  function renderTodayPage() {
    const promise = GetToday(auth);
    promise.then((response) => {
      setHabits(response.data);
      setProgress(() => percentageCounter(response.data));
      promise.catch((error) => console.log(error.response));
    });
  }
  function percentageCounter(habitsDaily) {
    let counter = 0;
    for (let i = 0; i < habitsDaily.lenght; i++) {
      if (habitsDaily[i].done) {
        counter++;
      }
    }
    const total = ((counter * 100) / habitsDaily.lenght).toFixed();
    return total;
  }

  return (
    <>
      <Top />
      <Container>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
        <h1>Hoje</h1>
      </Container>
      <Menu />
    </>
  );
}
