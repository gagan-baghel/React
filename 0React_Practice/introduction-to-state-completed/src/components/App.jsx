import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <button onClick={strike} id="btn1" >Change to strike through</button>
      {/* <button onClick={unStrike}>Change back</button> */}
      <p id="p" style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
    </div>
  );
}

export default App;
