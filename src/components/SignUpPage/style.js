import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

`;
const BigLogo = styled.img`
 width: 180px;
  height: 178.38px;
  padding-bottom: 20px;
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`;
export {
    Container,
    StyledLink,
    BigLogo
}