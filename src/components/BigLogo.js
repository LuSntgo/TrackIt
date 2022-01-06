import styled from "styled-components";
import biglogo from "../assets/biglogo.png"

const BigLogo = styled.div`
  width: 180px;
  height: 178.38px;

  position: fixed;
  top: 10vh;
  padding-bottom: 20px;
  background-image: url(${biglogo});
  background-size: cover;

`;

export default BigLogo;
