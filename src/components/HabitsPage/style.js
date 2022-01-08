import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;

  display: flex;

  align-items: center;
  flex-direction: column;

  form {
    width: 340px;
    height: 180px;
    background: #ffffff;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .nameHabit {
    background: blue;
  }
  .buttonHabit {
    padding-left: 105px;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .dayHabbit {
    display: flex;
    flex-direction: row;
  }
`;
const NewHabit = styled.div`
  background-color: pink;
  height: 20vh;
  width: 100%;
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
const NameHabit = styled.input`
  width: 303px;
  height: 45px;

  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;

  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;

  &::placeholder {
    color: #dbdbdb;
    font-family: "Lexend Deca", sans-serif;
  }

  &:disabled {
    background: #f2f2f2;
  }
`;
const HabitInput = styled.input`
  width: 303px;
  height: 45px;

  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;

  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;

  &::placeholder {
    color: #dbdbdb;
    font-family: "Lexend Deca", sans-serif;
  }

  &:disabled {
    background: #f2f2f2;
  }
`;

const SetDayBox = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#DBDBDB")};
  background: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
export { Container, NewHabit, HabitInput, NameHabit, SetDayBox };
