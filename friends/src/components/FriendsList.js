import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

const baseURL = 'http://localhost:5000/friends';

export default class FriendsList extends Component {
  state = {
    friends: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(baseURL)
      .then(response => {
        console.log(response.data);
        this.setState({
          friends: response.data,
          loading: false
        });
      })
      .catch(error =>
        console.log(
          `Oops! I think an error just happend check your API ${error}`
        )
      );
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <Friend key={index} friend={friend} />
    ));

    return (
      <div>
        <h1>Friends List</h1>
        <ul>{friends}</ul>
      </div>
    );
  }
}
