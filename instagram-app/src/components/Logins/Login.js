import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      loggedIn: props.logProps,
      username: '',
      password: ''
    }
  }

  logIn = event => {
    event.preventDefault();
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.setState({ loggedIn: false });
        window.location.reload();
      } else {
        localStorage.setItem('user', this.state.username );
        this.setState({ loggedIn: false });
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
    console.log(this.state.loggedIn + ' here')
    let show;
    if (this.state.loggedIn) {
      show = <form onSubmit={this.logIn}><button>LogOut</button></form>
    } else {
      show = <form onSubmit={this.logIn}>
            <input
            name='username'
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
            <button onSubmit={this.logIn}>LogIN/Logout</button>
        </form>
    }
    return (
      <div>
      {show}
      </div>
    )
  }
}

export default Login;
