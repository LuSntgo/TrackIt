import styled from "styled-components";

const TodayButton = styled.div`
  width: 91px;
  height: 91px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  bottom: 5vh;

  @media (max-width: 400px) {
    left: 21vh;
    bottom: 2vh;
  }
`;

export default TodayButton;
