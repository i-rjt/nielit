import {NavLink} from "react-router-dom"

import {useState, useEffect} from "react";

export function HomePage(){
  return (
        <>
          <Header/>
          <Center/>
          <Footer/>
        </>
    )
}

export function Header(){
  return (
    <>
    <header>
      <div id="logo">logo</div>
      <nav id="nav" role="navigation">
      
        {/* <div id="home"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="http:localhost:5173/">Home</NavLink></div>
        <div id="quiz"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="http:localhost:5173/quiz">Quiz</NavLink></div>
        <div id="notes"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="http:localhost:5173/notes">Notes</NavLink></div>
        <div id="chat"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="http:localhost:5173/chat">Chat</NavLink></div>  */}

            <div id="home"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="https://neilit.netlify.app/">Home</NavLink></div>
        <div id="quiz"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="https://neilit.netlify.app/quiz">Quiz</NavLink></div>
        <div id="notes"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="https://neilit.netlify.app/notes">Notes</NavLink></div> 
        <div id="chat"><NavLink className={(e) => e.isActive ? "isActive" : "" } to="https://neilit.netlify.app/chat">Chat</NavLink></div>
        
      </nav>
     
    </header>
  </>  
  )
}


function Center(){
  return(
      <>
        <main>
          <Quotes/>
          <BannerTop/>
          <BannerMid/>
          <BannerLast/>
        </main>
      </>
    )
}


function Quotes(){
    let obj = [ "Education is the most powerful weapon which you can use to change the world.\n – Nelson Mandela",
  "The roots of education are bitter, but the fruit is sweet.\n – Aristotle",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.\n  – Mahatma Gandhi",
  "An investment in knowledge pays the best interest.\n  – Benjamin Franklin",
  "Education is not the filling of a pail, but the lighting of a fire.\n  – William Butler Yeats",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.\n  – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going.\n  – Sam Levenson",
  "Push yourself, because no one else is going to do it for you. – Roronoa Zoro",
  "The only limit to our realization of tomorrow is our doubts of today.\n  – Franklin D. Roosevelt",
  "You don’t have to be great to start, but you have to start to be great.\n  – Zig Ziglar",
  "Believe you can and you're halfway there.\n  – Theodore Roosevelt",
  "What lies behind us and what lies before us are tiny matters compaisActive to what lies within us.\n  – Ralph Waldo Emerson",
  "Act as if what you do makes a difference. It does.\n  – William James",
  "In the middle of every difficulty lies opportunity.\n  – Albert Einstein",
  "Your time is limited, so don’t waste it living someone else’s life.\n  – Steve Jobs",
  "Success usually comes to those who are too busy to be looking for it.\n  – Henry David Thoreau",
  "Don’t be afraid to give up the good to go for the great.\n  – John D. Rockefeller",
  "I never dreamed about success. I worked for it.\n  – Estée Lauder",
  "Success is walking from failure to failure with no loss of enthusiasm.\n  – Winston Churchill",
  "The way to get started is to quit talking and begin doing.\n  – Walt Disney",
  "Strive not to be a success,but rather to be of value.\n  - Albert Einstein",
   "Discipline is the bridge between thought and accomplishment. – Jim Rohn",
  "A wise man does not seek attention; he builds silence into power. – Unknown",
  "Strong minds discuss ideas; average minds discuss events. – Socrates",
  "Success isn’t loud — it’s built in the quiet hours when no one is watching. – Unknown",
  "Master yourself and you master everything. – Leonardo da Vinci",
  "Do not chase the world — become the type it cannot ignore. – Unknown",
  "Every setback is a setup for a stronger comeback. – Willie Jolley",
  "Be calm — even storms pass with time. – Unknown",
  "Hard choices build easy lives; easy choices build hard lives. – Jerzy Gregorek",
  "The greatest strength is the ability to remain still under pressure. – Unknown",
  "Your future is hidden in your daily routine. – Mike Murdock",
  "A lion does not lose sleep over the opinion of sheep. – Unknown",
  "The mind is a weapon. Train it daily. – Master Roshi",
  "Silence is the language of the strong. – Unknown",
  "Comfort is the enemy of greatness. – Fred Smith",
  "Character is built when no one is clapping. – Unknown",
  "The only man you should try to be better than is the one you were yesterday. – Anonymous",
  "Don’t wait for opportunity. Create discipline and opportunity will follow. – Unknown",
  "Be humble, be hungry, and always be the hardest worker in the room. – Dwayne “The Rock” Johnson",
  "Your emotions are signals, not commands. – Unknown",
  "Energy flows where intention goes. – Tony Robbins",
  "The deeper you think, the simpler your actions become. – Unknown",
  "Adversity introduces a man to himself. – Albert Einstein",
  "You don’t need permission to be powerful. – Unknown",
  "A calm man is a focused man. – Unknown",
  "Be the man who builds in silence and lets results talk. – Unknown",
  "Your peace is more powerful than your reaction. – Unknown",
  "It’s not the load that breaks you, but how you carry it. – Lou Holtz",
  "In solitude, the strong discover their direction. – Unknown",
  "Be relentless with your goals and gentle with your ego. – Jack Hanma",
  "Intelligence is knowing what to say. Wisdom is knowing when to say nothing. – Buddha",
  "Real kings fix their crowns in private. – Unknown",
  "Discipline is doing what needs to be done — even when you don’t want to. – David Goggins",
  "Think deeply. Speak rarely. Act with precision. – kai",
  "A man of value attracts what he becomes. – Albert Einstein",
  "Consistency is more impressive than motivation. – Master Shifu",
  "No man was ever broken by discipline — only by the lack of it. – Ip Man",
  "A strong man stands tall, even when the world pushes him down. – Bob Vogel",
  "Let your silence speak your focus. – Unknown",
  "A powerful mind needs no loud voice. – Unknown",
  "Clarity comes in stillness, not in noise. – Eckhart Tolle",
  "A visionary sees beyond the storm. – Unknown",
  "Resilience is built in the unseen battles. – Unknown",
  "Your legacy is shaped by your quiet actions. – Unknown",
  "Be ruthless with your habits and patient with your results. – James Clear",
  "Strength is not in volume, but in control. – Marcus Aurelius",
  "Sometimes the strongest move is not to react. – Unknown",
  "The man who conquers himself is greater than the one who conquers a city. – Lao Tzu",
  "Depth of thought is the foundation of depth of character. – Unknown",
  "You are your greatest project — build wisely. – Rajat Dagar"
    ];

    let [current, next] = useState(Math.floor(Math.random() * 70));
    let [quote, nextQuote] = useState(obj[current]);

     useEffect(() => {
      nextQuote(obj[current]);
      
      let event = setInterval(() => {
        let random = Math.floor(Math.random() * 70);
       next((prev) => (prev + random) % obj.length)}
       , 6000);
    
        
      return () =>  clearInterval(event);

    },[current]);
    
    return(
      <>
        <section id="quoteCard">
        <p id="quoteText">{quote}</p>
        {/*<img src="./" alt="Student"/>*/}
        </section>

      </>
      )
}

function BannerTop(){
  return (
    <>
      <section className="bannerTop">
        <img  role="img"/>
      <aside>
      📚 <strong>Practice Smarter. Succeed Faster.</strong><br/>
    Prepare for NIELIT A Level, O Level, CCC, and other IT certification exams with our curated quiz platform.
    <br/>
    ✔️ Topic-wise practice<br/>
    ✔️ Real exam patterns<br/>
    ✔️ Instant feedback<br/>
    ✔️ Free and user-friendly
    </aside>
      </section>
    </>
    )
}


function BannerMid(){
  return (
    <>
      <section className="quizLinkBanner">
          <div id="quizBanner">
          <h3><b>SHARPEN YOUR MIND WITH FUN QUIZZES</b></h3>
          <span aria-label="Test your knowledge with a variety of quizzes.">Test your knowledge with a variety of quizzes.</span>
          <div><button role="button" id="quizLinkbtn">Start Quiz</button></div>
          </div>
          <img/>
      </section>
    </>
    )
}

function BannerLast(){
  return(
    <>
      <section className="courseBanner1 courseBanner">
        <div id="first" className="Olvl courselist"> </div>
        <div  id="second" className="Alvl courselist"> </div>
      </section>
      <section className="courseBanner2 courseBanner">
        <div id="third" className="CCClvl courselist"> </div>
        <div id="fourth" className="CAAlvl courselist"> </div>
      </section>
      <section className="courseBanner3 courseBanner">
        <div id="fifth" className="AIlvl courselist"> </div>
        <div id="sixth" className="Weblvl courselist"> </div>
      </section>
      <section className="courseBanner4 courseBanner">
        <div id="seventh" className="Blvl courselist"> </div>
        <div id="eighth" className="Cyberlvl courselist"> </div>
      </section>
    </>
    )
}


export function Footer(){
  return (
  <><footer ><em>&copy;2025 All Rights Reserved to <mark><NavLink id="contact" to="/contact">King of Hell</NavLink></mark></em></footer></>
  )
}
