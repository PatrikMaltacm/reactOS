import { useContext } from "react";
import { OpenedWindowsContext } from "../../context/OpenedWindowsContext";

function ChangeOpenedWindows() {

  const { openedWindows, setOpenedWindows } = useContext(OpenedWindowsContext);

  return (
    <button onClick={() => setOpenedWindows(["Trocou"])}>Alterar Window</button>
  );
}

export default ChangeOpenedWindows;
