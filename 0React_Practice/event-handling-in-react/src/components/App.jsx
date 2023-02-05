import React,{useState} from "react";

function App() {

  const [headerText,setheaderText] = useState("Hello")
  const [over,setover] = useState(false)

  function clicked(){
    setheaderText("submitted")
  }
  function mouseover(){
    setover(!over)
  }
  function mouseout(){
    setover(!over)
  }
  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text"  placeholder="What's your name?" />
      <button onClick={clicked}
      style={over?{backgroundColor:"black"}:null}
      onMouseOver={mouseover}
      onMouseOut={mouseout}
      >Submit</button>
    </div>
  );
}

export default App;
