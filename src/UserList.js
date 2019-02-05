import React from "react";
import STORE from './store'

function UserList(props) {
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
    <ul>
      {onStage.map(onStage =>  
      <li>
        <img src={onStage.avatar} alt="onStage.name" />
        <p>{onStage.name}</p> 
        <p>On Stage</p>
        </li>)}
      </ul>

      <ul>
      {inSession.map(inSession =>  
      <li>
        <img src={inSession.avatar} alt="inSession.name" />
        <p>{inSession.name}</p>
         <p>In Session</p>
         </li>)}
      </ul>
    </div>
  )
}

export default UserList;