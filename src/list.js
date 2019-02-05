import React from 'react';

function activeUser(props){
    const status = props.onStage ? 'on stage' : '';
return (
    <div class="participant">
        <img class="avatar" src={props.avatar} />
    <div>
    <h5 class="user_name">{props.name}</h5>
    <div class="status">{status}</div>
    </div>
    </div>
    );
}

export default activeUser;