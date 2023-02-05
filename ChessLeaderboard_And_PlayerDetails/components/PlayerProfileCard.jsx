import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
import api from '../api/profile'

export default function PlayerProfileCard(props) {
  const [playerInformation,setPlayerInformation] = useState({})
  const [joined,setjoined] = useState("")
  const [lastOnline,setlastOnline] = useState("")
  const location = useLocation();
  const data = location.state.player
  useEffect(()=>{
    const playerinformation = async ()=>{
      const fetchPlayerInformation = await api.get(`/pub/player/${data.username}`)
      setPlayerInformation(await fetchPlayerInformation.data)
      var join = new Date(fetchPlayerInformation.data.joined);
      setjoined(join.toDateString())
      var lastonline = new Date(fetchPlayerInformation.data.last_online);
      setlastOnline( lastonline.toDateString()  )
    }
    playerinformation()
  },[])
  return (
    <>
    <Header innerdata={data.username}/>
    <div className="gradient py-12" loading="lazy">
        <div className="backdrop-blur">
          <div className="flex flex-col md:flex-row justify-between items-center lg:mx-48 mx-2 my-2 px-8 py-2  rounded-lg border-[1px] border-slate-700">
            <div className="flex items-center justify-center">
            <div className="sm:h-72 sm:w-72 h-52 w-52 white rounded-full flex justify-center items-center ">
              <img loading="lazy" src={data.avatar} className="sm:h-[17rem] sm:w-[17rem] h-48 w-48 rounded-full" alt="" />
            </div>
            </div>
            <div className="md:w-[450px] flex flex-col justify-center md:text-left sm:pl-6 text-center rounded-lg sm:space-y-4 space-y-1 py-4">
              <h2 className="text-2xl sm:text-4xl font-bold">{data.name}</h2>
              <h3 className="text-2xl sm:text-4xl font-medium text-slate-400">ID:{data.player_id}</h3>
              <h2 className="text-2xl sm:text-4xl font-bold"><span className="bg-red-600 rounded-lg px-4"> TITLE - {data.title?data.title:"No Title"} </span></h2>
            </div>
          </div>
        </div>

        <div className="text-center mb-2 text-[green] font-medium">STATUS - {data.status}</div>

        <div className="lg:mx-48 mx-2 my-2  justify-between   py-2  rounded-lg border-[1px] border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center py-4 px-6">
            <div className="w-40 sm:space-y-4 space-y-2 my-2 border-[1px] border-slate-700 p-4 rounded-lg">
              <h3 className="font-semobold text-slate-400 text-left text-base sm:text-xl"><i className="fa-solid fa-chess-king pr-2 text-lime-400"></i> WIN-{data.win_count}</h3>
              <h3 className="font-semobold text-slate-400 text-left text-base sm:text-xl"> <i className="fa-regular fa-circle-xmark text-red-500 pr-2"></i> LOOSE-{data.loss_count}</h3>
              <h3 className="font-semobold text-slate-400 text-left text-base sm:text-xl"><i className="fa-solid fa-equals pr-2"></i> DRAW-{data.draw_count}</h3>
            </div>
            <div className="w-40 sm:space-y-4 space-y-2 border-[1px] border-slate-700 p-4 rounded-lg mb-2">
              <h3><i className="fa-solid fa-people-group font-semobold text-slate-900 text-3xl"></i></h3>
              <h3 className="font-semobold text-slate-400 sm:text-lg">Followers</h3>
              <h3 className="font-semobold text-slate-400 text-xl">{playerInformation?.followers}</h3>
            </div>
            <div className="sm:space-y-4 space-y-2 text-slate-1000 border-[1px] border-slate-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl"><i className="fa-solid fa-earth-americas "></i> Last-Online</h3>
              <h3 className="font-semobold text-slate-400 text-xl">{lastOnline}</h3>
            </div>
          </div>
        </div>

        <div className="lg:mx-48 mx-2 my-2  rounded-lg border-[1px] border-slate-700">
          <div className="flex flex-col sm:flex-row sm:justify-between justify-center space-y-4 px-8 py-4 h-32 items-center">
            <h4 className="font-semobold text-slate-400 text-base sm:text-xl">JOINED - {joined}</h4>
            <h4 className="font-semobold text-slate-400 text-base sm:text-xl"><i className="fa-solid fa-location-crosshairs pr-2"></i>{playerInformation?.location?playerInformation.location:'No Location'}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
