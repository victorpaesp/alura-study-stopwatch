import React, { useState } from "react";
import style from "./Form.module.scss";
import Button from "../Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label>Add new study</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="task"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label>Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <Button type="submit" text="Add" />
      </div>
    </form>
  );
}

export default Form;
