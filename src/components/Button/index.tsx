import React from "react";
import style from "./Button.module.scss";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ text, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {text}
    </button>
  );
}

export default Button;
