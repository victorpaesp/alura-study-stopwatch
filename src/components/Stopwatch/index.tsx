import style from "./Stopwatch.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

export default function Stopwatch({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start de stopwatch</p>
      <div className={style.watchWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)} text="Start" />
    </div>
  );
}
