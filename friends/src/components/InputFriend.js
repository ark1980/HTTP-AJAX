import React, { Component } from 'react';

class InputFriend extends Component {
  constructor(props) {
    super(props)
    console.log('My Friend ====> ',this.props.friendsList)

    this.state = {
      name: '',
      age: '',
      email: '',
      id: this.props.newId
    }
    
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    const newId = this.state.id + 1
    this.props.submitNewFriend(
      this.state.name,
      this.state.age,
      this.state.email,
    )
  }
  
  render() {
    console.log(this.props.newId);
    return(
      <div onSubmit={this.onSubmitHandle}>
        <form className="Input-friends">
          <input 
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name.value}
            onChange={this.handleChange}
          />
           <input 
            type="text"
            name= "age"
            placeholder="Age"
            value={this.state.age.value}
            onChange={this.handleChange}
          />
           <input 
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email.value}
            onChange={this.handleChange}
          />
          <button
            type="submit"
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default InputFriend;