import React from "react";


function List(props) {
  const status = props.onStage ? "on stage" : "";

  return (
    <div className="participant">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h5 className="user_name">{props.name}</h5>
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default List;
