import {useState,useEffect} from 'react'
import {Header} from './components/Home.jsx'
import axios from 'axios'

export function NotesPage(){
	return(
	<>
		<Header/>
		<Questions/>
	</>
		)
}


function Questions(){
	let quest = ["Explain the concept of 'dataflow architecture'.",
  "What is the primary function of a 'Register Renaming' technique?",
  "How does 'Reorder Buffer' contribute to out-of-order execution?",
  "Describe the process of a 'Translation Lookaside Buffer (TLB) miss'.",
  "What is the purpose of 'Page Table Entry (PTE)' flags beyond valid/dirty bits?",
  "Explain the concept of 'Inverse Page Tables'.",
  "What are the challenges of implementing 'segmentation with paging'?",
  "Describe the different types of 'bus interfaces' (e.g., synchronous, asynchronous).",
  "What is 'bus sizing' and its importance?",
  "Explain 'bus buffering' and 'bus arbitration' in multi-master bus systems.",
  "What are 'programmed I/O' interrupts used for?",
  "Describe the stages of an 'interrupt handling routine'.",
  "What is 'Direct Memory Access (DMA)' and its advantages over programmed I/O?",
  "Explain the different types of 'DMA transfer modes' (e.g., burst mode, cycle stealing).",
  "What is the role of the 'I/O controller' or 'device controller'?",
  "How do 'channels' improve I/O operations in large systems?",
  "What is 'RAID' technology and its different levels?",
  "Explain the concept of 'fault tolerance' in computer systems.",
  "Describe 'redundancy' as a technique for improving reliability."];

	const [ques, nextQues] = useState(quest);

	const subjects = ["Computer Organization", "IoT","Networking", "IT Tools","Python"]

		useEffect(()=>{
			const fetchQues = async () => {
				try{
					let res = await axios.get("http://localhost:5172/notes");
					nextQues(res.data);
				}catch (err){
					console.log(err);
				}
			}

			fetchQues();
		},[]);


		// function handleNextQuestions(){
		// 		for(let i = 0; i<9;i++){
		// 				keyNumber+=1;
		// 		}
		// 		console.log(keyNumber)
		// }

		// function handlePrevQuestions(){
		// 		for(let i = 0; i<9;i++){
		// 			if(keyNumber <= 1){
		// 				keyNumber=1;
		// 			}else{
		// 				keyNumber-=1;
		// 				}
		// 			}
		// 			console.log(keyNumber)
		// 	}

	return (
			<>
					
					{ques.map((que, index) => <li className="notesQues" key={index+1} >{index+1+". "}{que}</li>)}
					{/*<button id="prevRepeatQues" onClick={handlePrevQuestions}>Prev</button>*/}
					{/*<button id="nextRepeatQues" onClick={handleNextQuestions}>Next</button>*/}
			</>

		)
}