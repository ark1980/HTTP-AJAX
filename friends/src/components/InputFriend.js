import React, { Component } from 'react';

class InputFriend extends Component {
  render() {
    return(
      <div>
        <form>
          <input 
            type="text"
            placeholder="Name"
          />
           <input 
            type="text"
            placeholder="Age"
          />
           <input 
            type="text"
            placeholder="email"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputFriend;