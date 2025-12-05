import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import { type ReactNode } from "react";
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
  defaultWidth = 1280,
  defaultHeight = 720,
  buttons = [],
}: WindowProps) {
  
  if (!isOpen) return null;

  const centerX = (window.innerWidth - defaultWidth) / 2;
  const centerY = (window.innerHeight - defaultHeight) / 2;

  return (
    <Rnd
      default={{ x: centerX, y: centerY, width: defaultWidth, height: defaultHeight }}
      className={styles.window}
      dragHandleClassName={styles.header}
      bounds={"window"}
    >
      <header className={styles.header}>
        <strong>{title}</strong>
        {buttons.map((btn, index) => (
          <button
            className={styles.defaultButton}
            key={index}
            onClick={btn.onClick}
          >
            {btn.label}
          </button>
        ))}
        <button onClick={onClose} className={styles.closeButton}>
          <IoMdCloseCircleOutline className={styles.iconClose} size={20} />
        </button>
      </header>

      {children}
    </Rnd>
  );
}
