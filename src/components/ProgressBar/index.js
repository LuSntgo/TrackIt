import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";

import "react-circular-progressbar/dist/styles.css";
import UserContext from "../../contexts/UserContext";
import TodayButton from "./style";

const ProgressBar = () => {
  const { progress } = useContext(UserContext);
  return (
    <TodayButton>
      <CircularProgressbar
        value={progress}
        text={"Hoje"}
        background
        backgroundPadding={6}
        styles={buildStyles({
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          backgroundColor: "#52B6FF",
          textColor: "#ffffff",
          pathColor: "#ffffff",
          trailColor: "transparent",
          textSize: "18px",
        })}
      />
    </TodayButton>
  );
};
export default ProgressBar;
