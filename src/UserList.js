import React from "react";
import STORE from './store'

function UserList() {
  let onStage = [];
  let inSession = [];
  for(let i =0; i<STORE.participants.length; i++){
    if(STORE.participants[i].onStage){
      onStage.push(STORE.participants[i])
    } else if (STORE.participants[i].inSession){
      inSession.push(STORE.participants[i])
    }
  }
  

  return(
    <div className = 'ActiveList'>
    <ul className="onStage">
      {onStage.map(onStage =>  
      <li>
        <div className="onStageParagraph">
          <p className="stageName">{onStage.name}</p>
          <p>On Stage</p>
        </div>
        <img src={onStage.avatar} alt="onStage.name" />
        </li>)}
      </ul>

      <ul className="inSession">
      {inSession.map(inSession =>  
      <li>
        <p className="sessionName">{inSession.name}</p>
         <p>In Session</p>
         <img src={inSession.avatar} alt="inSession.name" />
         </li>)}
      </ul>
    </div>
  )
}

export default UserList;