import React from "react";
import { Link } from "react-router-dom";
//import { useContext } from "react";

import { Footer, StyledLink } from "./style";
import ProgressBar from "../ProgressBar/index";

export default function Menu() {
  return (
    <div>
      <Footer>
        <StyledLink to="/habits">Hábitos</StyledLink>
        <Link to="/">
          <ProgressBar />
        </Link>
        <StyledLink to="/">Histórico</StyledLink>
      </Footer>
    </div>
  );
}
