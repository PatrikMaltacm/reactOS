
import { createContext, useState } from "react";

interface OpenedWindowsContextType {
    openedWindows: string[];
    setOpenedWindows: React.Dispatch<React.SetStateAction<string[]>>;
}

export const OpenedWindowsContext = createContext<OpenedWindowsContextType>({
    openedWindows: [],
    setOpenedWindows: () => {},
});

//@ts-ignore
export const OpenedWindowsProvider = ({ children }) => {
    const [openedWindows, setOpenedWindows] = useState<string[]>([]);

    return (
        <OpenedWindowsContext.Provider value={{openedWindows, setOpenedWindows}}>
            {children}
        </OpenedWindowsContext.Provider>
    );
};
