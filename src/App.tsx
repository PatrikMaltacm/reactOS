import BlackJack from './components/BlackJack'
import styles from "./App.module.css"
import Files from './components/Files'
import TextEditor from './components/TextEditor'
import { useContext } from 'react'

import { OpenedWindowsContext } from './context/OpenedWindowsContext'
import ChangeOpenedWindows from './components/ChangeOpenedWindows'
import TaskBar from './components/TaskBar'

function App() {

  return (
    <div className={styles.desktop}>
      <ChangeOpenedWindows />
      <TextEditor />
      <Files />
      <BlackJack />
      <TaskBar/>
    </div>
  )
}

export default App
