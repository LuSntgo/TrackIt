import styled from "styled-components";

const Input = styled.input`
  height: 45px;
  width: 100%;

  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;
  
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;


  &::placeholder {
    color: #DBDBDB;
    font-family: "Lexend Deca", sans-serif;
  }

  &:disabled{
    background: #F2F2F2;
  }  
`;

export default Input;
