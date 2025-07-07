import {useState, useEffect} from 'react';
import axios from 'axios';
import {Header} from './components/Home.jsx';


export function QuizPage(){
	return(
		<>
			<Header/>

			<Quizzes/>
		</>
		)
}


function Quizzes(){

	const subjects = [
	 	{
	 	key: 1,
	 	name: "Computer Organization"
		 },{
	 	key: 2,
	 	name: "Web Design & Development",
	 	},{
	 	key: 3,
	 	name: "CCC",
	 },{
	 	key: 4,
	 	name: "IT Tools",
	 },{
	 	key: 5,
	 	name: "Networking",
	 },{
	 	key: 6,
	 	name: "IoT",
	 },];


	const [keyState, NextKey] = useState(1);		/*Subjects*/
	const [quesKey,NextQuesKey] = useState(0);
	const [quizSet,NextQuizSet] = useState([]);
	const [data,SetData] = useState([]);
	const [explainState, SetExplainState] = useState(false);

	
	useEffect(() => {
		const fetchData = async () => {
			try{
				let res = await axios.get('http://localhost:5172/ques');
				SetData(res.data);
				handlequest(res.data);
			} catch (err){
				console.error('Some Error occurred in fetching data', err);
  			}
		}
		fetchData();
	},[])
	
	
function handleClick(index){								//subject navbar
		NextKey(subjects[index].key);
	}

function handlequest(resdata){
				NextQuizSet((prev) => [...prev, resdata[quesKey]]);
				NextQuesKey((prev) => (prev != 51 ? prev + 1 : 0));
			}

function handleQuizForm(event){
		event.preventDefault();
		let formData = new FormData(event.target);
		
		
}



				

	return (
		<>
			<main id="quizPage">
				<nav id="sidebar">
					<aside>
						<ul>
						{subjects.map((sub,index) => <li key={sub.key} className={sub.key == keyState ? "subactive" : "subName"} onClick={() => handleClick(index)}> {sub.name}</li>)}
						</ul>
					</aside>
				</nav>
					<div id="quizContainer">
						<section id="quizSection">
						<form onSubmit={handleQuizForm}>
						<ul key={quesKey}>
							{
								quizSet.length != 0 && (
									<>
										<h3>{quizSet[quesKey-1].question}</h3>
										{quizSet[quesKey-1].options.map((opt,index) => (
											<li key={index} value={opt}>{opt}</li>))}
										<p className={(explainState) ? "explain" : "explainNot" }> {quizSet[quesKey-1].explaination}</p>
									</>
								)
							}
							</ul>
							<button id="nextBtn" role="button" name="" >Next</button>
							<button id="resetBtn" role="button" onClick={() => NextQuesKey(0)}>Reset</button>
						</form>
						</section>
					</div>
				</main>
			
		</>
		)
}


