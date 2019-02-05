import React from 'react';
import List from './List';
import store from './store';


function App (props) {
  
  return (
    <div className = "sidebar">
      <List participant = {store.participants} />
    </div>
  );
}

export default App;