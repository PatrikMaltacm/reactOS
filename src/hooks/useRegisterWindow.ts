import { useEffect, useContext } from "react";
import { OpenedWindowsContext } from "../context/OpenedWindowsContext";

export function useRegisterWindow(title: string, isOpen: boolean) {
  const { setOpenedWindows } = useContext(OpenedWindowsContext);

  useEffect(() => {
    if (isOpen) {
      // adiciona sem duplicar
      setOpenedWindows((prev) =>
        prev.includes(title) ? prev : [...prev, title]
      );
    } else {
      // remove
      setOpenedWindows((prev) =>
        prev.filter((w) => w !== title)
      );
    }
  }, [isOpen, title, setOpenedWindows]);
}
