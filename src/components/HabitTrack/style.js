import styled from "styled-components";
import check from "../../assets/check.png";

const Container = styled.div`
 width: 100%;
  height: 94px;
  display: flex;
 
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: #FFFFFF;
  margin-bottom: 10px;
  border-radius: 7px;
  }
  .center{
    width: 70%;
    flex-direction: column;
  }
  .task-name{
    font-size: 20px;
    line-height: 25px;
    color: #666666;

    margin-bottom: 7px;
  }
  p {
      margin-bottom: 3px;
  }
.sequence {
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 7px;
 
  }
    .record {
      color: #8fc549;
    }
  }
`;
const MarkBox = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;

  background: ${(props) => (props.check ? "#8FC549" : "#EBEBEB")};
  background-image: url(${check});
  background-repeat: no-repeat;
  background-size: 35px 28px;
  background-position: center;

  margin-bottom: 10px;
  border-radius: 7px;
  }
`;

export { Container, MarkBox };
