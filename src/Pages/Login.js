import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('http://localhost:3000/login', config)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        localStorage.token = data.token;
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}
