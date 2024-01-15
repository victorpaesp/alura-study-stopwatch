import React from "react";
import style from "./Form.module.scss";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label>Add new study</label>
          <input
            type="text"
            name="task"
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
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <Button />
        </div>
      </form>
    );
  }
}

export default Form;
