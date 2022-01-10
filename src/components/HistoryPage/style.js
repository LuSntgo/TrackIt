import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: #f2f2f2;
`;
const History = styled.div`
  margin: 15px;
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
