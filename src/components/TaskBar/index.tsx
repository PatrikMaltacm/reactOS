import { useContext } from "react";
import { OpenedWindowsContext } from "../../context/OpenedWindowsContext";
import styles from "./TaskBar.module.css"

function TaskBar() {
  const { openedWindows } = useContext(OpenedWindowsContext);

  return (
    <div className={styles.taskbar}>
        {openedWindows.map((window) => {
            return(
                <h1>{window}</h1>
            )
        })}
    </div>
  )
}

export default TaskBar