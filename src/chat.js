import React from 'react';
import STORE from './store';

function Chat(props) {
  for(let i =0; i<STORE.chatEvents.length;i++){

    if(STORE.chatEvents[i].type === 'thumbs-up'){
      STORE.chatEvents[i].message = 'gave a thumbs up';
    } else if (STORE.chatEvents[i].type === 'thumbs-down'){
      STORE.chatEvents[i].message = 'gave a thumbs down';
    } else if(STORE.chatEvents[i].type === 'clap'){
      STORE.chatEvents[i].message = 'clapped';
    } else if(STORE.chatEvents[i].type === 'raise-hand'){
      STORE.chatEvents[i].message = 'raised hand';
    } else if(STORE.chatEvents[i].type === 'join'){
      STORE.chatEvents[i].message = 'joined';
    } else if(STORE.chatEvents[i].type === 'leave'){
      STORE.chatEvents[i].message = 'left';
    } else if(STORE.chatEvents[i].type === 'join-stage'){
      STORE.chatEvents[i].message = 'joined the stage';
    } else if(STORE.chatEvents[i].type === 'leave-stage'){
      STORE.chatEvents[i].message = 'left the stage';
    } 
  }

  return (
    <div className = 'chatLog'>
    <div>{STORE.chatEvents.map(chatEvents => <ul>
      <li><p>{STORE.participants.find(val => 
      val.id === chatEvents.participantId).name}</p>
      <p>{new Date(chatEvents.timestamp).getHours()}:
      {new Date(chatEvents.timestamp).getMinutes()}</p>
      </li><p>{chatEvents.message}</p>
    </ul>)} </div>
    </div>
  );
}

export default Chat;