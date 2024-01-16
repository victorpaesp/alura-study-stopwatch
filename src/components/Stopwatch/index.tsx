import style from "./Stopwatch.module.scss";
import Button from "../Button";
import Clock from "./Clock";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start de stopwatch</p>
      <div className={style.watchWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
}
