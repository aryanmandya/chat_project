import React from "react";

import "../Circle.css";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import res from '../assets/SampleResponse'

function Circle() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [query, setQuery] = useState("Type your query here...");
  const [user, setUser] = useState([]);
  const [bot, setBot] = useState([]);


  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser([...user,query]);
    console.log(res.Question.indexOf(""+query))
    if(res.Question.indexOf(query)!=-1){
      setBot([...bot,res.Answer[res.Question.indexOf(query)]])
    }
    else setBot([...bot,"Sorry i don't have response for this :("])
    setQuery("")
  }
  return (
    <div class="circle-container">
      <div onClick={toggleBox}>
        <FaRobot />
      </div>
      {isBoxOpen && (
        <div className="box">
          <p>chat bot</p>
          <div className="chat-bot1">
            <p className="chating">Hi !</p>
            <p className="chating">I'm a sample bot.</p>
            <p className="chating">Please ask me questions like How are you?, Whats the name of Developer?, Give me name of the app?.</p>
            <p className="chating">Before leaving, Don't forget to say Bye.</p>
             {user.map((elem,ind)=>(
              <>
              <p className="user">{elem}</p>
              <p className="chating">{bot[ind]}</p>
              </>
            ))} 
          
            
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) =>{
                setQuery(e.target.value)
              }}
              name="fname"
              placeholder="Type your query..."
              className="query-box"
            />
            <button type="submit" className="send">
              <IoSendSharp />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
// function BotIcon() {

//   return (
//     <div className="bot-icon">
//       <div style={{color:"black"}}>
//         Bot Icon
//       </div>

//     </div>
//   );
// }

export default Circle;
