import React from "react";
import store from './store';

function List(props) {
  const status = store.participants[0].onStage ? "on stage" : "";

  return (
    <div className="participant">
      <img className="avatar" src={store.participants[0].avatar} alt={store.participants[0].name} />
      <div>
        <h5 className="user_name">{store.participants[0].name}</h5>
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default List;
