// import styles from './TextEditor.module.css';
import { Rnd } from "react-rnd";
import DesktopIcon from "../DesktopIcon";
import { useState } from "react";
import styles from "./BlackJack.module.css"

export interface FileItem {
    id: string;
    name: string;
    content: string;
}

export default function BlackJack() {

    const [openWindow, setOpenWindow] = useState<boolean>(false);

    const onClick = () => {
        setOpenWindow(true);
    }

      const handleCloseWindow = () => {
        setOpenWindow(false)
    }

    
    return (
        <>
            <DesktopIcon title={"BackJack"} onClick={onClick} x={20} y={250} />

            {openWindow && (
                <Rnd
                    default={{ x: 200, y: 200, width: 800, height: 600 }}
                    className={'window'}
                >
                    <header className={styles.header}>
                        <strong>BlackJack</strong>
                        <button onClick={handleCloseWindow}>Close</button>
                    </header>

                    <iframe src="https://v3nicios.github.io/JogoBlackJack21/" style={{width: "100%", height: '100%'}}></iframe>

                </Rnd>
            )}
        </>
    )
}