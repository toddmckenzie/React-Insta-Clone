import React from 'react';
import PostPage from '../components/PostPage';
import Login from '../components/Logins/Login';


const withAuthenticate = PostPage => Login =>
  class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }

  render() {
    let display;
    if(this.state.loggedIn) {
      display = <PostPage />
    }else {
      display = <Login />
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default withAuthenticate;


//Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
