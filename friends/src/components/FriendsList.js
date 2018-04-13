import React, { Component } from 'react';
import Friend from './Friend';
import InputFriend from './InputFriend';
import axios from 'axios';

const baseURL = 'http://localhost:5000/friends';

export default class FriendsList extends Component {
  state = {
    friends: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(baseURL)
      .then(response => {
        this.setState({
          friends: response.data,
          loading: false,
        });
      })
      .catch(error =>
        console.log(
          `Oops! I think an error just happend check your API ${error}`
        )
      );
  }

  addFriend = (name, age, email, id) => {
    const newFriend = {
      name,
      age,
      email,
      id
    } 
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
  }

  render() {
    if (this.state.loading) return <h2>LOADING...</h2>;
    
    return (
      <div className="Container">
        <ul>
          {
            this.state.friends.map(friend => (
              <Friend 
                friend={friend}
                key={friend.id}  
              />
            ))
          }
        </ul>
        <InputFriend 
          submitNewFriend={this.addFriend}
          newId={Number([this.state.friends[this.state.friends.length -1].id])}
        />
      </div>
    );
  }
}
