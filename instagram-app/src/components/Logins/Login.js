import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  logIn = event => {
    event.preventDefault();
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.setState({ loggedIn: false });
        console.log(this.state.loggedIn);
      } else {
        localStorage.setItem('user', this.state.username );
        this.setState({ loggedIn: true });
        console.log(this.state.loggedIn);
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
        <form onSubmit={this.logIn}>
            <input name='username'
            type='text'
            placeholder='Username'
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
            <button onSubmit={this.logIn}>LogIN</button>
        </form>
      </div>
    )
  }
}

export default Login;
