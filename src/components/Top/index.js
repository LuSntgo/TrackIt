import React from "react";
import { useContext } from "react";

import MiniLogo from "../MiniLogo";
import Header from "./style";
import UserContext from "../../contexts/UserContext";

export default function Top() {
  const { avatar } = useContext(UserContext);
  return (
    <div>
      <Header>
        <MiniLogo />
        <img src={avatar}></img>
      </Header>
    </div>
  );
}
