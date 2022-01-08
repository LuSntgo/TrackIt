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
  span {
    width: 100%;
    justify-content: center;
    align-items: center;

    padding: 18px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
  .nameHabit {
    padding-top: 10px;
    padding-bottom: 8px;
  }
  .buttonHabit {
    padding-left: 105px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .dayHabbit {
    width: 100%;
    margin-left: 35px;
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 5px;
  }
`;
const NewHabit = styled.div`
  height: 20vh;
  width: 100%;
  padding: 100px 16px 20px 16px;
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
  h1 {
    color: #126ba5;
    font-size: 22.976px;
    line-height: 29px;
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
  gap: 10;

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
const HabitList = styled.div`
  width: 90%;
  height: 91px;
  margin: 10px 0;
  display: flex;
  padding: 0 15px;
  gap: 8px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 7px;
  position: relative;
  p {
    width: 90%;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 13px;
    font-family: "Lexend Deca", sans-serif;
  }
  ion-icon {
    font-size: 15px;
    position: absolute;
    top: 9px;
    right: 8px;
  }
`;

export { Container, NewHabit, HabitInput, NameHabit, SetDayBox, HabitList };
