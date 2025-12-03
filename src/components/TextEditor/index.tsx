import { Rnd } from "react-rnd";
import styles from './TextEditor.module.css';
import { useState } from "react";

export default function TextEditor() {
    const [cursor , setCursor] = useState('grab');  

    return (
        <Rnd
            bounds='parent'
            enableResizing={false}
            onDragStart={() => setCursor('grabbing')}
            onDragStop={() => setCursor('grab')}
            default={{
                x: 100,
                y: 100,
                width: 100,
                height: 100,
            }}
            style={{
                cursor
            }}
        >
            <div className={styles.main}>
                <div className={styles.icon}></div>
                <p>Text Editor</p>
            </div>
        </Rnd>
    )
}