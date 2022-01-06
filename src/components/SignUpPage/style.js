import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;

  form {
    margin-top: 38vh;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #52b6ff;
`;
export { Container, StyledLink };
