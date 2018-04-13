import React from 'react';

const Friend = (props) => {
  const friend = props.friend;
  return (
    <div className="Friend">
        <li><strong>Name: </strong>{friend.name}</li>
        <li><strong>Age: </strong>{friend.age}</li>
        <li><strong>e-mail: </strong>{friend.email}</li>
    </div>
  );
}

export default Friend;