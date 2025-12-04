// import styles from './TextEditor.module.css';
import styles from "./TextEditor.module.css";
import { Rnd } from "react-rnd";
import { useMemo, useRef, useState } from "react";
import DesktopIcon from "../DesktopIcon";
import JoditEditor from "jodit-react";

export interface FileItem {
    id: string;
    name: string;
    content: string;
}

export default function TextEditor() {
    const [body, setBody] = useState("");
    const [openWindow, setOpenWindow] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [files, setFiles] = useState<FileItem[]>([]);
    const [actualFiles, setActualFiles] = useState<FileItem | undefined>(undefined);

    const findFiles = () => {
        const saved = localStorage.getItem("webos_files");
        if (saved) {
            try {
                const parsed: FileItem[] = JSON.parse(saved);
                setFiles(parsed);
            } catch {
                console.error("Erro ao ler arquivos do LocalStorage");
            }
        }
        console.log(files)
    }

    const handleCloseWindow = () => {
        setOpenWindow(false)
        setActualFiles(undefined)
        setFiles([])
        setBody('')
    }

    const handleOpenFile = (fileContent: FileItem) => {
        setActualFiles(fileContent)
        setBody(fileContent.content)
        setShowModal(false)
    }

    const handleSaveFile = () => {
        if (!actualFiles) {
            alert("Nenhum arquivo aberto.");
            return;
        }

        // cria nova versão do arquivo
        const updatedFile: FileItem = {
            ...actualFiles,
            content: body, // novo conteúdo vindo do editor
        };

        // substitui no array de arquivos
        const updatedFiles = files.map((file) =>
            file.id === actualFiles.id ? updatedFile : file
        );

        // atualiza estados
        setFiles(updatedFiles);
        setActualFiles(updatedFile);

        // salva no localStorage
        localStorage.setItem("webos_files", JSON.stringify(updatedFiles));

        alert("Arquivo salvo!");
    };


    const editor = useRef(null);

    const onClick = () => {
        setOpenWindow(true);
        findFiles();
    }

    const editorConfig = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Escreva aqui...',
            statusbar: false,
            toolbarAdaptive: false,
            buttons: [
                'bold', 'italic', '|',
                'ul', 'ol', '|',
                'paragraph', '|',
                'align', '|',
                'image', 'link', '|',
                'hr'
            ],
            extraStyle: `
        pre {
          background-color: #1e1e1e;
          color: #d4d4d4;
          padding: 15px;
          border-radius: 6px;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          overflow-x: auto;
          border: 1px solid #333;
          margin: 10px 0;
        }
      `,
            askBeforePasteFromWord: false,
            askBeforePasteHTML: false,
        }),
        []
    );

    return (
        <>
            <DesktopIcon title={"TextEditor"} onClick={onClick} x={20} y={50} />

            {openWindow && (
                <Rnd
                    default={{ x: 200, y: 200, width: 600, height: 400 }}
                    className={'window'}
                >
                    <header className={styles.header}>
                        <strong>Files</strong>
                        <button onClick={() => setShowModal(true)}>Open File</button>
                        <button onClick={handleSaveFile}>Save File</button>
                        <button onClick={handleCloseWindow}>Close</button>
                    </header>

                    <div>
                        <JoditEditor
                            ref={editor}
                            value={body}
                            config={editorConfig}
                            tabIndex={1}
                            onBlur={(newContent) => setBody(newContent)}
                            onChange={() => { }}
                            className={styles.editor}
                        />
                    </div>

                    {showModal && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modal}>
                                <h3>Novo Arquivo</h3>
                                {files.length === 0 && <p>Nenhum arquivo criado ainda.</p>}

                                <ul style={{ listStyle: "none" }}>
                                    {files.map((file) => (
                                        <li key={file.id} style={{ marginBottom: "6px" }}>
                                            📄 <strong>{file.name}</strong>

                                            <button
                                                style={{ marginLeft: 10 }}
                                                onClick={() => handleOpenFile(file)}
                                            >
                                                Abrir
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </Rnd>
            )}
        </>
    )
}