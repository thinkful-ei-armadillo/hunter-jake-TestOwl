import React from "react";




function List(props) {
  
  
  return (
    <div className="participant">
      <img className="avatar" src={'props.avatar'} alt={'props.name'} />
      <div>
        <h5 className="user_name">{'props.name'}</h5>
        <div className="status">{'status'}</div>
      </div>
    </div>
  );
}

export default List;
