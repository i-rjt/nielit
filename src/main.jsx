import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './css/index.css'
import './css/App.css'
import './css/Center.css'
import './css/Chat.css'
import './css/practice.css'
import './css/quiz.css'
import './css/notes.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
