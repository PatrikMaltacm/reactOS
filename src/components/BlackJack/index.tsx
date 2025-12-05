import DesktopIcon from "../DesktopIcon";
import { useState } from "react";
import Window from "../Window";
import { GiCardJackClubs } from "react-icons/gi";
import { useRegisterWindow } from "../../hooks/useRegisterWindow";

export interface FileItem {
    id: string;
    name: string;
    content: string;
}

export default function BlackJack() {
    const [openWindow, setOpenWindow] = useState<boolean>(false);

    const title = "BlackJack"

    useRegisterWindow("GiCardJackClubs", openWindow);

    const onClick = () => {
        setOpenWindow(true);
    }

    const handleCloseWindow = () => {
        setOpenWindow(false)
    }


    return (
        <>
            <DesktopIcon
                Icon={<GiCardJackClubs size={50} />}
                title={title}
                onDoubleClick={onClick}
                x={20}
                y={250}
            />

            <Window
                title={title}
                isOpen={openWindow}
                onClose={handleCloseWindow}
                defaultWidth={800}
                defaultHeight={600}
            >
                <div style={{ width: '100%', height: '100%' }}>
                    <iframe src="https://v3nicios.github.io/JogoBlackJack21/" style={{ width: "100%", height: '100%' }}></iframe>
                </div>
            </Window>
        </>
    )
}