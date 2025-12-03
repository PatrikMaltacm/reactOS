// import styles from './TextEditor.module.css';
import DesktopIcon from "../DesktopIcon";

export default function TextEditor() {

    const onClick = () => {
        alert("Text Editor opened!");
    }

    return (
        <DesktopIcon title={"TextEditor"} onClick={onClick} x={20} y={50} />
    )
}