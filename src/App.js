import React, {Component} from 'react';
import UserList from './UserList';
import Stage from './Stage';
import Chat from './Chat';



class App extends Component{
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  };

  render(){
  const {store} = this.props;
  return (
    <div className = "display-container">
      <div className="userList">
        <UserList
          key={store.participants.id}
          />
      </div>

      <div className="onStage">
      <Stage
         key={store.participants.id}
         />
      </div>
      <div className="chatLogContainer">
      <Chat
        key={store.chatEvents.participantId}
        />
      </div>
    </div>
  )
}
}
export default App;