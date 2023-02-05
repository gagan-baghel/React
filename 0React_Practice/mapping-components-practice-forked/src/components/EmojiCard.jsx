import React from "react"


export default function Card(emoji){
  return  <div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {emoji.emoji}
    </span>
    <span>{emoji.name}</span>
  </dt>
  <dd>
  {emoji.meaning}
  </dd>
</div>
}