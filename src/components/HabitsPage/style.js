import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;
const NewHabit = styled.div`
  background-color: pink;
  height: 20vh;
  padding: 30px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 27px;
    color: #ffffff;
  }
`;
export { Container, NewHabit };
