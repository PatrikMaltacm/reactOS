import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import DesktopIcon from "../DesktopIcon";
import styles from "./Files.module.css";
import { Rnd } from "react-rnd";

export interface FileItem {
  id: string;
  name: string;
  content: string;
}

export default function Files() {
  const [openWindow, setOpenWindow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [fileName, setFileName] = useState<string>("");
  const [fileContent, setFileContent] = useState<string>("");

  const [files, setFiles] = useState<FileItem[]>([]);

  // -------------------------------------------------------------------
  // Load saved files from LocalStorage
  // -------------------------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("webos_files");
    if (saved) {
      try {
        const parsed: FileItem[] = JSON.parse(saved);
        setFiles(parsed);
      } catch {
        console.error("Erro ao ler arquivos do LocalStorage");
      }
    }
  }, []);

  // -------------------------------------------------------------------
  // Utility to update LS + state
  // -------------------------------------------------------------------
  const saveFilesLS = (newFiles: FileItem[]) => {
    setFiles(newFiles);
    localStorage.setItem("webos_files", JSON.stringify(newFiles));
  };

  // -------------------------------------------------------------------
  // Create a new file
  // -------------------------------------------------------------------
  const createFile = () => {
    if (!fileName.trim()) {
      alert("Digite um nome.");
      return;
    }

    const newFile: FileItem = {
      id: crypto.randomUUID(),
      name: fileName,
      content: fileContent,
    };

    const updated = [...files, newFile];
    saveFilesLS(updated);

    setFileName("");
    setFileContent("");
    setShowModal(false);
  };

  // -------------------------------------------------------------------
  // Delete file
  // -------------------------------------------------------------------
  const deleteFile = (id: string) => {
    const updated = files.filter((f) => f.id !== id);
    saveFilesLS(updated);
  };

  return (
    <>
      <DesktopIcon
        title={"Files"}
        x={20}
        y={150}
        onClick={() => setOpenWindow(true)}
      />

      {openWindow && (
        <Rnd
          default={{ x: 200, y: 200, width: 600, height: 400 }}
          className={styles.window}
        >
          <header className={styles.header}>
            <strong>Files</strong>
            <button onClick={() => setShowModal(true)}>New File</button>
            <button onClick={() => setOpenWindow(false)}>Close</button>
          </header>

          <div className={styles.content}>
            <h3>Arquivos:</h3>

            {files.length === 0 && <p>Nenhum arquivo criado ainda.</p>}

            <ul style={{listStyle: "none" }}>
              {files.map((file) => (
                <li key={file.id} style={{ marginBottom: "6px"}}>
                  📄 <strong>{file.name}</strong>

                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => alert(file.content)}
                  >
                    Abrir
                  </button>

                  <button
                    style={{ marginLeft: 10, color: "red" }}
                    onClick={() => deleteFile(file.id)}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal */}
          {showModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <h3>Novo Arquivo</h3>

                <label>
                  Nome:
                  <input
                    value={fileName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFileName(e.target.value)
                    }
                    placeholder="ex: notas.txt"
                  />
                </label>

                <div className={styles.modalActions}>
                  <button onClick={createFile}>Salvar</button>
                  <button onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </Rnd>
      )}
    </>
  );
}
