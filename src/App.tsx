import BlackJack from './components/BlackJack'
import styles from "./App.module.css"
import Files from './components/Files'
import TextEditor from './components/TextEditor'
import TaskBar from './components/TaskBar'

function App() {

  return (
    <div className={styles.desktop}>
      <TextEditor />
      <Files />
      <BlackJack />
      <TaskBar/>
    </div>
  )
}

export default App
