import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: #e5e5e5;
`;
const History = styled.div`
  margin: 15px;
  background: #e5e5e5;
  padding-top: 90px;
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 18px;
  }
  span {
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;

export { Container, History };
