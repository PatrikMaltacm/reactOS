
import { useState } from 'react';
import DesktopIcon from '../DesktopIcon';
import styles from './Files.module.css';
import { Rnd } from 'react-rnd';

export default function Files() {

    const [openWindow, setOpenWindow] = useState(false);

    const onClick = () => {
        setOpenWindow(true);
    }

    return (
        <>
            <DesktopIcon title={"Files"} x={20} y={150} onClick={onClick} />

            {openWindow && (
                <Rnd
                    default={{
                        x: 200,
                        y: 200,
                        width: 600,
                        height: 400,
                    }}
                    className={styles.window}
                >
                    <header className={styles.header}>
                        <strong>Files</strong>
                        <button onClick={() => setOpenWindow(false)}>Close</button>
                    </header>
                </Rnd>
            )}
        </>
    )
}