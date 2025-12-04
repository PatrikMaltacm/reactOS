import DesktopIcon from "../DesktopIcon";
import { useState } from "react";
import Window from "../Window";
import { GiCardJackClubs } from "react-icons/gi";

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
            <DesktopIcon 
            Icon={<GiCardJackClubs  size={50}/>}
            title={"BackJack"} 
            onDoubleClick={onClick} 
            x={20} 
            y={250} 
            />

            <Window
                title="BlackJack"
                isOpen={openWindow}
                onClose={handleCloseWindow}
                defaultWidth={800}
                defaultHeight={600}
            >
                <iframe src="https://v3nicios.github.io/JogoBlackJack21/" style={{width: "100%", height: '100%'}}></iframe>
            </Window>
        </>
    )
}