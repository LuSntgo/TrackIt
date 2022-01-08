import React from "react";
//import { useContext } from "react";

import { Footer, StyledLink } from "./style";
import ProgressBar from "../ProgressBar/index";

export default function Menu() {
  return (
    <div>
      <Footer>
        <StyledLink to="/">Hábitos</StyledLink>
        <ProgressBar />
        <StyledLink to="/">Histórico</StyledLink>
      </Footer>
    </div>
  );
}
