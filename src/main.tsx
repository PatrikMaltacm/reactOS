import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { OpenedWindowsProvider } from './context/OpenedWindowsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenedWindowsProvider>
      <App />
    </OpenedWindowsProvider>
  </StrictMode>,
)
