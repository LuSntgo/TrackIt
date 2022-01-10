import { Container, MarkBox } from "./style";

export default function HabitTrack({ h, handleHabit }) {
  return (
    <Container>
      <div className="center">
        <p className="task-name"> {h.name}</p>
        <div className="sequence"></div>
        <p>
          Sequência atual:{" "}
          <span className={h.done ? "record" : ""}>
            {h.currentSequence} dias{" "}
          </span>
        </p>
        <p>
          Seu recorde:{" "}
          <span
            className={
              h.currentSequence === h.highestSequence && h.done ? "record" : ""
            }
          >
            {h.highestSequence} dias
          </span>
        </p>
      </div>
      <MarkBox
        onClick={() => handleHabit(h.id, h.done)}
        check={h.done}
      ></MarkBox>
    </Container>
  );
}
