import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoadingPage = () => {
  return (
    <LoadingScreen>
      <h1>Estamos carregando suas informações </h1>
      <h3> bebeu água hoje?</h3>
      <div>
        <Loader
          type="Hearts"
          color="pink"
          arialLabel="loading-indicator"
          height={85}
          width={85}
        />
      </div>
    </LoadingScreen>
  );
};
export default LoadingPage;

const LoadingScreen = styled.div`
  min-height: 100vh;
  width: 100%;

  border: 1px solid #d5d5d5;
  background-color: #f2f2f2;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  h3 {
    margin-top: 30px;
    color: pink;
  }
`;
