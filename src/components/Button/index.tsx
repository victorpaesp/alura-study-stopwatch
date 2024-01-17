import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  text: String;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
