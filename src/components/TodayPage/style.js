import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 100px 18px;

  .weekday-title {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;

    margin-bottom: 5px;
  }
`;
const Percentage = styled.div`
  font-size: 18px;
  line-height: 22px;
  }
`;
const Habit = styled.div`
 width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;


  padding: 0 18px;
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 7px;
  }
`;

export { Container, Percentage, Habit };
