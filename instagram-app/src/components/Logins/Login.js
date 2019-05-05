import React from 'react';
import './login.scss'


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  logIn = event => {
    event.preventDefault();
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
      //  this.setState({ loggedIn: false });
        window.location.reload();
      } else {
        localStorage.setItem('user', this.state.username );
        //this.setState({ loggedIn: true });
        window.location.reload();
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

    let show;
    if (localStorage.getItem('user')) {
      show = <form onSubmit={this.logIn} username={this.state.username}><button className="logout">LogOut</button></form>
    } else {
      show =
      <div className='login-page'>
        <div className='login-container'>
            <form onSubmit={this.logIn} className='form'>
              <input
              name='username'
              type='text'
              placeholder='Username'
              onChange={this.handleUser}
              value={this.state.username}
              className='username'
              ></input>
              <input name='password'
              type='text'
              placeholder='password'
              onChange={this.handlePass}
              value={this.state.password}
              className='password'
              >
              </input>
              <button onSubmit={this.logIn}>Login</button>
              <h2>Instagram Clone</h2>
              <p>*Put any username and password to login</p>
            </form>
        </div>
      </div>
    }
    return (
      <div>
      {show}
      </div>
    )
  }
}

export default Login;
