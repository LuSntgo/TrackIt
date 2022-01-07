import styled from "styled-components";
import trackit from "../assets/TrackIt.png";

const MiniLogo = styled.div`
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 2vh;
  left: 2vh;
  background-image: url(${trackit});
  background-repeat: no-repeat;
`;

export default MiniLogo;
