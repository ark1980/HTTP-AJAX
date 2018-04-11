import React, { Component } from 'react';
import FriendsLis from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsLis />
      </div>
    );
  }
}

export default App;
