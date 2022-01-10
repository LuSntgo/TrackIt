import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;

  border: 1px solid #d5d5d5;
  background: #52b6ff;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 10px;
  border-radius: 5px;

  &:disabled {
    background-color: #52b6ff;
  }
`;
const CancelButton = styled.button`
  width: 84px;
  height: 35px;
  background: #ffffff;
  border: none;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 5px;
  border-radius: 5px;

  &:disabled {
    background-color: #52b6ff;
  }
`;
const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border: none;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  border-radius: 5px;

  &:disabled {
    background-color: #52b6ff;
  }
`;
export { Button, CancelButton, SaveButton };
