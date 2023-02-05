import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function LeaderBoard({ playersdata }) {

  const leaderBoardData = playersdata?.map((player,i) => {
    return (
      <div
        key={player.username}
        className="w-[400px] mx-4  mt-16 backdrop-blur-xl bg-white/70 shadow-xl rounded-lg text-gray-900"
      >
        <div className="rounded-t-lg h-24 overflow-hidden gradient" />
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-black rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src={player.avatar}
            alt="player Profile"
          />
        </div>
        <div className="text-center mt-2 mx-8">
          <h2 className="font-semibold">
            {player.name ? player.name : player.username}
          </h2>
          <p className="text-gray-500">{player.username}</p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around ">
            <h2 className="font-bold">RANK</h2>
            <div>{player.rank}</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <h2 className="font-bold">SCORE</h2>
            <div>{player.score}</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <h2 className="font-bold">TITEL</h2>
            <div>{player.title}</div>
          </li>
        </ul>
        <div className="p-4 border-t mx-8 mt-2">
          <Link
            to={`/player/profile/${player.username}`}
            state={{ player: player }}
          >
            <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              More Details
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
    <Header innerdata={"LeaderBoard"}/>
    <div
      key={"leaderboard"}
      loading="lazy"
      className="flex flex-row flex-wrap justify-center canvasBackgroundGradient"
    >
      {leaderBoardData}
    </div>
    </>

  );
}
