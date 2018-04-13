import React, { Component } from 'react';

class Friend extends Component {

  state = {
    name: '',
    age: '',
    email: ''
  }

  render() {
  const friend = this.props.friend;
  return (
    <div>
      <li className="Friend">
        <div><strong>Name: </strong>{friend.name}</div>
        <div><strong>Age: </strong>{friend.age}</div>
        <div><strong>email: </strong>{friend.email}</div>
      </li>
    </div>
    );
  }
}
  

export default Friend;