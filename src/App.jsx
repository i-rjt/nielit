import {HomePage} from './components/Home.jsx'
import {ChatApp} from './Chat.jsx'
import {QuizPage} from './Quiz.jsx'
import {Contact} from './Contact.jsx'
import {NotesPage} from './Notes.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export function App(){
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatApp />} />
      <Route path="/quiz" element={<QuizPage/>} />
      <Route path="/notes" element={<NotesPage/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </>
    )
}