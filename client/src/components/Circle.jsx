import React from "react";

import "../Circle.css";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";

function Circle() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [query, setQuery] = useState("Type your query here...");

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };
  return (
    <div class="circle-container">
      <div onClick={toggleBox}>
        <FaRobot />
      </div>
      {isBoxOpen && (
        <div className="box">
          <p>chat bot</p>
          <form>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="fname"
              placeholder="Type your query..."
              className="query-box"
            />
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
