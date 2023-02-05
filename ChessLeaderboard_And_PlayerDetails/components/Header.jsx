import React from 'react'

export default function Header(props) {
  return (
    <div key={props.innerdata} className="flex justify-center md:text-[70px] text-center text-[40px] font-semibold headerbackground border-b">{props.innerdata!="LeaderBoard"?`user : `+ props.innerdata:props.innerdata}</div>
  )
}
