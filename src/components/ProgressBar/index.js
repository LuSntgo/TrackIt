import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TodayButton from "./style";

const ProgressBar = () => {
  const percentage = 66;
  return (
    <TodayButton>
      <CircularProgressbar
        value={percentage}
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
