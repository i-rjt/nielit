import {HomePage} from './components/Home.jsx'
import {ChatApp} from './Chat.jsx'
import {QuizPage} from './Quiz.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export function App(){

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatApp />} />
      <Route path="/quiz" element={<QuizPage/>} />
    </Routes>
    </Router>
    </>
    )
}