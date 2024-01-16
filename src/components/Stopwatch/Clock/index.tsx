import style from "./Clock.module.scss";

export default function Clock() {
  return (
    <>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchDivider}>:</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
    </>
  );
}
