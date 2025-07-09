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
  const subjects = [
    { key: 1, name: "CO & OS" },
    { key: 2, name: "Web Design" },
    { key: 3, name: "Python" },
    { key: 4, name: "IT-Tools" },
    { key: 6, name: "IoT" },
  ];

  const [keyState, setKeyState] = useState(1); // Subject key
  const [quizSet, NextQuizSet] = useState([]); // Full quiz data
  const [quizQue, setQuizQue] = useState([]);  // Filtered per subject
  const [quesKey, setQuesKey] = useState(1); // Question index
  const [explainState, SetExplainState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get('http://localhost:5172/co');
        NextQuizSet(res.data);
      } catch (err) {
        console.error('Some Error occurred in fetching data', err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = quizSet.filter(q => q.subjectKey === keyState);
    setQuizQue(filtered);
    setQuesKey(1);
  }, [quizSet, keyState]);

  const handleClick = (subKey) => {
    setKeyState(subKey);
    SetExplainState(false);
  };

  const handleQuizForm = (e) => {
    e.preventDefault();
    SetExplainState(true);
    setTimeout(() => {
      setQuesKey((prev) =>
        prev < quizQue.length ? prev + 1 : quizQue.length
      );
      SetExplainState(false);
    }, 2000);
  };

  const NextQuesKey = () => {
    setQuesKey(1);
    SetExplainState(false);
  };

  return (
    <main id="quizPage">
      <nav id="sidebar">
        <aside>
          <ul>
            {subjects.map((sub) => (
              <li
                key={sub.key}
                className={sub.key === keyState ? "subactive" : "subName"}
                onClick={() => handleClick(sub.key)}
              >
                {sub.name}
              </li>
            ))}
          </ul>
        </aside>
      </nav>
      <div id="quizContainer">
        <section id="quizSection">
          <form onSubmit={handleQuizForm}>
            <ul id="questions" key={quesKey}>
              {quizQue.length !== 0 ? (
                <>
                  <h3>{quizQue[quesKey - 1]?.question}</h3>
                  {quizQue[quesKey - 1]?.options?.map((opt, index) => (
                    <li key={index}>{opt}</li>
                  ))}
                  <p className={explainState ? "explain" : "explainNot"}>
                    {quizQue[quesKey - 1]?.explaination}
                  </p>
                </>
              ) : (
                <p>No questions found.</p>
              )}
            </ul>
            <div id="questionBtn">
              <button id="nextBtn" role="button" name="">Next</button>
              <button id="resetBtn" type="button" role="button" onClick={NextQuesKey}>
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
