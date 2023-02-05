import React , {useState} from "react";





function App() {

const now =  new Date().toLocaleTimeString()

const [currentime,setime] = useState(now)

setInterval(fetchtime,1000)


function fetchtime(){
  const updatedtime =new Date().toLocaleTimeString()
  setime(updatedtime)
}



  return (
    <div className="container">
      <h1>{currentime}</h1>
      <button onClick={fetchtime} >Get Time</button>
    </div>
  );
}

export default App;
