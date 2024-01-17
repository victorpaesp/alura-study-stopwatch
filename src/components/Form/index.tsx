import React from "react";
import style from "./Form.module.scss";
import Button from "../Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label>Add new study</label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
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
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
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
}

export default Form;
