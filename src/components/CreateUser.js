import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config();
const apiURL = process.env.REACT_APP_DEV_API_URL;

class CreateUser extends Component {
  
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      isSubmitted: false
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post(`${apiURL}/users/add`, user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      isSubmitted: true
    })
  }


  render() {
    return (
      <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
      {this.state.isSubmitted && <h1>User has been added</h1>}
    </div>
    );
  }
}

export default CreateUser;