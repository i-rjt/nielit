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

  const [keyState, setKeyState] = useState(1);
  const [quizSet, setQuizSet] = useState([]);
  const [quizQue, setQuizQue] = useState([]);
  const [quesKey, setQuesKey] = useState(1);
  const [explainState, SetExplainState] = useState(false);
  const [selectedSet, setSelectedSet] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (keyState === 1) res = await axios.get('https://nielit.onrender.com/co');
        else if (keyState === 2) res = await axios.get('https://nielit.onrender.com/web');
        else if (keyState === 4) res = await axios.get('https://nielit.onrender.com/ittools');
        else if (keyState === 6) res = await axios.get('https://nielit.onrender.com/iot');
        if (res) setQuizSet(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (keyState !== 3) {
      fetchData();
      setScore(0);
      setSelectedSet(null);
    }
    if (keyState == 3) {
      fetchData();
      setScore(0);
      setSelectedSet(1);
    }
  }, [keyState]);

  const handlePythonSetClick = async (setNumber) => {
    try {
      const res = await axios.get(`https://nielit.onrender.com/python/Set${setNumber}`);
      setQuizSet(res.data);
      setSelectedSet(setNumber);
      setQuesKey(1);
      setScore(0);
    } catch (err) {
      console.error(`Failed to fetch Python Set${setNumber}:`, err);
    }
  };

  useEffect(() => {
    const filtered = quizSet.filter(q => q.subjectKey === keyState || keyState === 3);
    setQuizQue(filtered);
    setQuesKey(1);
  }, [quizSet, keyState]);

  const handleClick = (subKey) => {
    setKeyState(subKey);
    SetExplainState(false);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  };

  const handleQuizForm = (e) => {
    e.preventDefault();
    if (!selectedOption) return alert("Please select an option");

    setIsSubmitted(true);
    const correct = quizQue[quesKey - 1]?.answer;
    console.log(correct);
    if (selectedOption === correct) {
      setScore(prev => prev + 1);
    };

    SetExplainState(true);

    setTimeout(() => {
      setQuesKey(prev => (prev < quizQue.length ? prev + 1 : prev));
      SetExplainState(false);
      setSelectedOption(null);
      setIsSubmitted(false);
    }, 15000);
  };

  const NextQuesKey = () => {
    setQuesKey(1);
    SetExplainState(false);
    setScore(0);
    setSelectedOption(null);
    setIsSubmitted(false);
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

          {/* Python Set Buttons */}
          {keyState === 3 && (
            <div className="setButtons">
              <h4>Select Python Set:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {Array.from({ length: 26 }, (_, i) => i + 1).map((setNum) => (
                  <button
                    key={setNum}
                    onClick={() => handlePythonSetClick(setNum)}
                    className={selectedSet === setNum ? "setActive" : ""}
                  >
                    Set{setNum}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Score & Progress */}
          <div className="quiz-meta">
            <p><strong>Score:</strong> {score} / {quizQue.length}</p>
            <p><strong>Progress:</strong> Question {quesKey} of {quizQue.length}</p>
          </div>

          <form onSubmit={handleQuizForm}>
            <ul id="questions" key={quesKey}>
              {quizQue.length !== 0 ? (
                <>
                  <h3>{quizQue[quesKey - 1]?.question}</h3>

                  {quizQue[quesKey - 1]?.options?.map((opt, index) => {
                    const correctAns = quizQue[quesKey - 1]?.answer;
                    let optionClass = "";
                    if (isSubmitted){
                      if (opt === correctAns) optionClass = "correct";
                      else if (opt === selectedOption) optionClass = "wrong";
                    }

                    return (
                      <li key={index} >
                        <label className={optionClass}>
                          <input
                            type="radio"
                            name="option"
                            value={opt}
                            checked={selectedOption === opt}
                            onChange={() => !isSubmitted && setSelectedOption(opt)}
                            disabled={isSubmitted}
                          />
                          {opt}
                        </label>
                      </li>
                    );
                  })}

                  <p className={explainState ? "explain" : "explainNot"}>
                    {quizQue[quesKey - 1]?.explanation}
                  </p>
                </>
              ) : (
                <p>No questions found.</p>
              )}
            </ul>

            <div id="questionBtn">
              <button id="nextBtn" type="submit">Next</button>
              <button id="resetBtn" type="button" onClick={NextQuesKey}>Reset</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
