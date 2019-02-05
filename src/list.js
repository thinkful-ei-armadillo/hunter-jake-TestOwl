import React from "react";
import store from './store';

function List(props) {
  const status = store.participants.onStage ? "on stage" : "";
  for (let id = 0; id < store.participants.length; id++) {
  const userInfo = store.participants.map((id) => {
    return {
      avatar: store.participants[id].avatar,
      name: store.participants[id].name,
      status: status[id]
    }
  });
  console.log(userInfo);
  

  return (
    <div className="participant">
      <img className="avatar" src={userInfo.avatar} alt={userInfo.name} />
      <div>
        <h5 className="user_name">{userInfo.name}</h5>
        <div className="status">{userInfo.status}</div>
      </div>
    </div>
  );
}
}
export default List;
