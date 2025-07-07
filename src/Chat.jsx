import {Header} from './components/Home.jsx'
import {Link, useLocation} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client'
// const socket = io('https://nielit.onrender.com');
const socket = io('http://localhost:5172');

export function ChatApp(){

	return(
	<>
		<Header/>
		<Iface/>
	</>
	)
}


 function Iface(){
 // 	const names = [
  // "PixelPhantom",
  // "SilentSpecter",
  // "GalacticGoblin",
  // "CrimsonByte",
  // "ShadowSurfer",
  // "AstroNinja",
  // "MysticMaven",
  // "EchoChaser",
  // "QuantumKnight",
  // "BlazeRunner",
  // "FrostByte_42",
  // "StardustDreamer",
  // "WiredWhisper",
  // "CosmicDrifter",
  // "VelvetVapor",
  // "IronHeart_OG",
  // "SolarFlare_X",
  // "NightCrawler_7",
  // "GhostlyGamer",
  // "DigitalDragon",
  // "EmeraldEnigma",
  // "StormBreaker01",
  // "DreamWeaver99",
  // "LunarLurker",
  // "VortexVision",
  // "TechTrooper",
  // "AquaAssassin",
  // "DesertFox_Gaming",
  // "NeonNomad",
  // "SparkPlug_Pro",
  // "CyberSorcerer",
  // "RogueReaper",
  // "SilentScribe",
  // "WhisperWind",
  // "ZenithZephyr",
  // "CobaltCrusader",
  // "GoldenGloom",
  // "SilverSerpent",
  // "PhoenixFury",
  // "WildfireWitch",
  // "AbyssWalker",
  // "ThunderStrike",
  // "Echo_of_Time",
  // "IroncladMind",
  // "Starfall_Hero",
  // "CrimsonComet",
  // "GlimmerGhost",
  // "OrbitalOutlaw",
  // "ShadowStryder",
  // "MysticMarauder",
  // "DigitalNomad_77",
  // "ArcticArtist",
  // "BlazingBlade",
  // "DreamingPixel",
  // "Frostbite_Fury",
  // "GalaxyGuardian",
  // "HarmonicGhost",
  // "IgnitedImagination",
  // "JungleJumper",
  // "KnightlyKarma",
  // "LuminousLore",
  // "MysticMaze",
  // "NightshadeNinja",
  // "OceanOracle",
  // "PixelPirate",
  // "QuasarQueen",
  // "RuneRunner",
  // "SilentShadows",
  // "TemporalTraveler",
  // "UrbanUprising",
  // "VividVagabond",
  // "WanderingWisp",
  // "XenonXplorer",
  // "YieldingYeti",
  // "ZephyrZest",
  // "AceOfSpades_9",
  // "BardicBlade",
  // "CanyonCoder",
  // "DawnDrifter",
  // "ElectricEcho",
  // "ForestFighter",
  // "GlacialGlimmer",
  // "Hearthstone_Hound",
  // "InfiniteInk",
  // "JadedJester",
  // "KrypticKoder",
  // "LoneLancer",
  // "MirageMaster",
  // "NovaNinja",
  // "OmegaOutlaw",
  // "PulsePioneer",
  // "QuillQuest",
  // "RiftRanger",
  // "SkywardSentry",
  // "TerraTracker",
  // "UmbraUnicorn",
  // "VaporVanguard",
  // "WhisperingWillow",
  // "XenithZero",
  // "YonderYarn",
  // "ZapZodiac",
  // "ByteBandit",
  // "CrimsonCortex",
  // "DuskDweller",
  // "EmberEchoes",
  // "FjordFollower",
  // "GravityGlider",
  // "Hyperion_Haze"
// 	]

	let	name;

	const greet = [
  "Hello, ",
  "Hi there, ",
  "Greetings, ",
  "Hey, ",
  "Good to see you, ",
  "Welcome, ",
  "Nice to meet you, ",
  "Howdy, ",
  "Salutations, ",
]

	const randomNumber = Math.floor(Math.random() * 100);

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
					name=prompt("Enter Your name: ");
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
			<div id="UserName">{name}</div>
		</section>
		<section id="chatCenterPage" >
		<li>{greet[3] + name}</li>
		<ul id="chats" >{ 
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