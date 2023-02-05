import { useState,useEffect } from 'react'  
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import api from '../api/profile.jsx'
import PlayerProfileCard from '../components/PlayerProfileCard.jsx';
import LeaderBoard from '../components/LeaderBoard.jsx';



function App() {
  const [playersdata,setplayersdata] = useState([]);

  const getplayersdata = async () =>{
      const  playersdata = await api.get("/pub/leaderboards")
      return playersdata;
  }

  useEffect(()=>{
    const fetchdata = async ()=>{
      const fetchedLeaderboardsData =  await getplayersdata();
      setplayersdata(fetchedLeaderboardsData.data.daily)
    }
    fetchdata()
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaderBoard playersdata={playersdata}/>}/>
        <Route path="/player/profile/:id" element={<PlayerProfileCard playersdata={playersdata}/>}/>
      </Routes>
    </Router>
  )
}

export default App
