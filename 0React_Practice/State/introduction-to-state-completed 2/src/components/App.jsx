import React ,{ useState } from "react";

var isDone = false;

function App() {

  const [isDone,setisDone] = useState(false)
  
  function strike() {
    setisDone(true);
  }

  function unStrike() {
    setisDone(false);
  }

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
