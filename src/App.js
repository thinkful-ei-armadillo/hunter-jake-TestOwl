import React, {Component} from 'react';
import UserList from './UserList';



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
      <div className="userList">
        <UserList
          key={store.participants.id}
          avatar={store.participants.avatar}
          name={store.participants.name}
          onStage={store.participants.onStage}
          />
      </div>
  )
}
}
export default App;