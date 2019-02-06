import React from 'react';
import STORE from './store';

function Stage(props) {
  let onStage = [];

  for(let i =0; i<STORE.participants.length; i++){
      if(STORE.participants[i].onStage){
      onStage.push(STORE.participants[i])
    }
  }
    return (
      <div className = "onStage">
       {onStage.map(onStage =>  
        <p><img src={onStage.avatar} alt="onStage.name" />
        {onStage.name}</p>)}
      </div>
    );
}

export default Stage;