import BlackJack from "../BlackJack";
import Files from "../Files";
import TextEditor from "../TextEditor";
import styles from './Desktop.module.css';

export default function Desktop() {
  return (
    <div className={styles.desktop}>
        <TextEditor/>
        <Files/>
        <BlackJack/>
    </div>
  )
}
