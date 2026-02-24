import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Home.jsx';

export function QuizPage() {
  return (
    <>
      <Header />
      <Quizzes />
    </>
  );
}

function Quizzes() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    axios.get("https://nielit.onrender.com/quiz").then((res) => {
        setQuestions(res.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }, []);

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  const q = questions[index];

  function checkAnswer() {
    if (selected === q.correct_answer) {
      setResult("correct");
    } else {
      setResult("wrong ");
    }
  }

  function nextQuestion() {
    setIndex(index + 1);
    setSelected("");
    setResult("");
  }

  return (
  <div id="quizPage">
    <div id="quizBox">
      
      <h3 className="question">{q.question}</h3>

      <div className="options">
        {q.options && q.options.map((opt, i) => (
          <label key={i} className="option">
            <input
              type="radio"
              value={opt}
              checked={selected === opt}
              onChange={(e) => setSelected(e.target.value)}
            />
            {opt}
          </label>
        ))}
      </div>

      <p className={`result ${result}`}>{result}</p>

      <div className="btns">
        <button onClick={checkAnswer}>Submit</button>
        <button onClick={nextQuestion}>Next</button>
      </div>

    </div>
  </div>
);
}

export default Quizzes;