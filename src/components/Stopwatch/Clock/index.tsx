import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const [minuteTen, minuteUnit] = String(Math.floor(time / 60)).padStart(
    2,
    "0"
  );
  const [secondTen, secondUnit] = String(time % 60).padStart(2, "0");
  return (
    <>
      <span className={style.watchNumber}>{minuteTen}</span>
      <span className={style.watchNumber}>{minuteUnit}</span>
      <span className={style.watchDivider}>:</span>
      <span className={style.watchNumber}>{secondTen}</span>
      <span className={style.watchNumber}>{secondUnit}</span>
    </>
  );
}
