import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import type { ReactNode } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
  buttons?: { label: string; onClick: () => void }[];
}

export default function Window({
  title,
  isOpen,
  onClose,
  children,
  defaultWidth = 600,
  defaultHeight = 400,
  defaultX = 200,
  defaultY = 200,
  buttons = [],
}: WindowProps) {
  if (!isOpen) return null;

  return (
    <Rnd
      default={{ x: defaultX, y: defaultY, width: defaultWidth, height: defaultHeight }}
      className={styles.window}
      dragHandleClassName={styles.header}
    >
      <header className={styles.header}>
        <strong>{title}</strong>
        {buttons.map((btn, index) => (
          <button className={styles.defaultButton} key={index} onClick={btn.onClick}>
            {btn.label}
          </button>
        ))}
        <button onClick={onClose} className={styles.closeButton}><IoMdCloseCircleOutline className={styles.iconClose} size={20}/></button>
      </header>

      {children}
    </Rnd>
  );
}
