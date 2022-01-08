import styled from "styled-components";

const Header = styled.div`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  z-index: 320;

  img {
    position: fixed;
    right: 2vh;
    top: 1vh;
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;

export default Header;
