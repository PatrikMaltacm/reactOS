import BlackJack from './components/BlackJack'
import styles from "./App.module.css"
import Files from './components/Files'
import TextEditor from './components/TextEditor'

function App() {

  return (
    <div className={styles.desktop}>
      <TextEditor />
      <Files />
      <BlackJack />
    </div>
  )
}

export default App
