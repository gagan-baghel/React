import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


document.getElementById("btn1").addEventListener("onClick", ()=>{
    document.getElementById("p").style.textDecoration="line-through"
  });

