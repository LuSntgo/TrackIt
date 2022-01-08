import { useState, useEffect, useContext } from "react";
import { GetToday } from "../../services/trackit";

//import Loading from '../Loading'
import Top from "../Top";
import Menu from "../Menu";
import Container from "./style";
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {
  const [items, setItems] = useState(null);
  const { token } = useContext(UserContext);
  const auth = { headers: { Authorization: `Bearer ${token}` } };
  //const [isLoading, setIsLoading] = useState(true);
  console.log(token);
  useEffect(() => {
    renderTodayPage();
  }, []);

  function renderTodayPage() {
    const promise = GetToday(auth);
    promise.then((response) => setItems(response.data));
    promise.catch((error) => console.log(error.response));
  }

  return (
    <>
      <Top />
      <Container>
        <h1>Hoje</h1>
      </Container>
      <Menu />
    </>
  );
}
