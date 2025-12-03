import { Rnd } from 'react-rnd';
import styles from './DesktopIcon.module.css';
import { useState } from 'react';

type DesktopIconProps = {
    title: string;
    onClick?: () => void;
    x: number;
    y: number;
}

export default function DesktopIcon({title, onClick: onclick, x, y}: DesktopIconProps) {
    const [cursor , setCursor] = useState('pointer');  

    return (
        <Rnd
            bounds='parent'
            enableResizing={false}
            onDragStart={() => setCursor('grabbing')}
            onDragStop={() => setCursor('pointer')}
            onClick={onclick}
            default={{
                x,
                y,
                width: 100,
                height: 100,
            }}
            style={{
                cursor
            }}
        >
            <div className={styles.main}>
                <div className={styles.icon}></div>
                <p>{title}</p>
            </div>
        </Rnd>
    )
}