import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;

  border: 1px solid #d5d5d5;
  background: #52b6ff;
  color: #FFFFFF;
  font-family: "Lexend Deca", sans-serif;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 10px;
  border-radius: 5px;
  
  &:disabled{
    background-color:#52B6FF;
  }  
`
;

export default Button;
