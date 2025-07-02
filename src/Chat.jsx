import {Header} from './components/Home.jsx'
import {Link, useLocation} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client'
const socket = io('https://srcbay.glitch.me');

export function ChatApp(){

	return(
	<>
		<Header/>
		<Iface/>
	</>
	)
}


 function Iface(){
 	const location = useLocation();

 	const [items, NextState] = useState([]);
 	const inputRef = useRef(null);

 	useEffect(() => {
 		document.body.classList.add('fixedBody');
 		inputRef.current.focus();

 		return () => {
 			document.body.classList.remove('fixedBody');
		}

 	}, []);

 useEffect(() =>{
 		socket.on('Active',(msg) => {
					NextState((prev) => [...prev, msg])
				});
 		window.scrollTo(0, document.body.scrollHeight)
 		 	return () => socket.off('Active');
 },[location])

 const handleForm = (event) =>{
 		event.preventDefault();
 		let nextMessage = inputRef.current.value.trim();
	 	if(nextMessage !== ""){
	 	socket.emit('Active',(nextMessage));
	 	inputRef.current.value = "";
		inputRef.current.focus();	//Refocus input

	 }
}

	return(
		<> 
		<div id="chatPage">
		<section id="sideNavbar" className="">
			<aside>
				<nav>
					<ul>
						<li id="AI"><q>Ask AI?</q></li>
					</ul>
				</nav>
			</aside>
			<div id="UserName">{}</div>
		</section>
		<section id="chatCenterPage">
		<ul id="chats">{ 
				items.map((val, index) =>(
					<li key={index} className="chatSession">{val}</li>))
		}
		</ul>
		<div id="TypeBox">
			<form id="messageForm" onSubmit={handleForm}>
				<label>
					<input ref={inputRef} type="text" id="txt" placeholder="Type here...." autoFocus autoComplete="off" />
				</label>
					<button role="button" id="sendbtn">
					Send
				</button>
			</form>
		</div>
		</section>
		</div>
	</>
	)
}