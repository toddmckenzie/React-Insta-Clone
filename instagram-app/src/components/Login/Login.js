import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      username: '',
      password: ''
    }
  }

  logIn = event => {
    event.preventDefault();
    if (localStorage.getItem(this.state.username)) {
        localStorage.removeItem(this.state.username);
        this.setState({ loggedIn: false });
      } else {
        localStorage.setItem(this.state.username, 'LocalUser');
        this.setState({ loggedIn: true });
      }
    };

  handlePass = event => {
    this.setState({ [event.target.name]: event.target.value },
    )
  }
  handleUser = event => {
    this.setState({ [event.target.name]: event.target.value },
    )
  }

  render() {
    return (
      <div>
          <input name='username'
          type='text'
          placeHolder='Username'
          onChange={this.handleUser}
          value={this.state.username}
          ></input>
          <input name='password'
          type='text'
          placeholder='password'
          onChange={this.handlePass}
          value={this.state.password}
          >
          </input>
          <button onClick={this.logIn}>LogIN</button>
      </div>
    )
  }
}

export default Login;
