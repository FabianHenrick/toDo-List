import { Trash } from "phosphor-react";
import { HTMLProps, useState } from "react";
import { ChangeEvent, InputHTMLAttributes } from "react";
import style from "./Task.module.css";

interface taskProps {
  content: string;
  onDeleteTask: (tasks: string) => void;
}

export function Task(props: taskProps) {
  function handleDeleteTask() {
    props.onDeleteTask(props.content);
  }

  const [checkedState, setCheckedState] = useState<boolean>(false);

  return (
    <div className={style.task}>
      <label className={style.container}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={checkedState}
          onChange={(event) => setCheckedState(event?.target.checked)}
        ></input>
        <span className={style.checkmark}></span>
      </label>
      <p className={style.taskLabel}>{props.content}</p>

      <Trash className={style.trashIcon} size="24" onClick={handleDeleteTask} />
    </div>
  );
}
