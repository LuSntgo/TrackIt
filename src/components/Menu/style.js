import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.div`
  height: 10vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #52b6ff;
  font-size: 18px;
  line-height: 22px;
`;
export { Footer, StyledLink };
