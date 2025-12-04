import { Rnd } from 'react-rnd';
import styles from './DesktopIcon.module.css';
import { useState } from 'react';

type DesktopIconProps = {
    title: string;
    onDoubleClick?: () => void;
    x: number;
    y: number;
    Icon: React.ReactNode;
}

export default function DesktopIcon({title, onDoubleClick, x, y, Icon}: DesktopIconProps) {
    const [cursor , setCursor] = useState('pointer');  

    return (
        <Rnd
            bounds='parent'
            enableResizing={false}
            onDragStart={() => setCursor('grabbing')}
            onDragStop={() => setCursor('pointer')}
            onDoubleClick={onDoubleClick}
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
                {Icon}
                <p>{title}</p>
            </div>
        </Rnd>
    )
}