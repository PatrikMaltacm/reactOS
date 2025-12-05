import { useContext } from "react";
import { OpenedWindowsContext } from "../../context/OpenedWindowsContext";
import styles from "./TaskBar.module.css"
import DynamicIcon from "../DinamicIcon";

function TaskBar() {
  const { openedWindows } = useContext(OpenedWindowsContext);

  return (
    <div className={styles.taskbar}>
        {openedWindows.map((window: any) => {
            return(
                <DynamicIcon name={window} size={45} color="white"/>
            )
        })}
    </div>
  )
}

export default TaskBar