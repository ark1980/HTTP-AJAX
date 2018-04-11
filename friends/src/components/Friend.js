import React from 'react';

const Friend = (props) => {
  const friend = props.friend;
  return (
    <div>
      <li>
        {friend.name}
        {friend.age}
        {friend.email}
      </li>
    </div>
  );
}

export default Friend;