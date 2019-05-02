import React from 'react';
import PostPage from '../components/PostPage';
import Login from '../components/Logins/Login';

//need to get state here to sync with Login page....
const withAuthenticate = PostPage => Login =>
  class extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

//  window.location.reload();

  componentDidMount() {
    (localStorage.getItem('user')) ?
    this.setState({ loggedIn: true }) :
    this.setState({ loggedIn: false })
  }

  render() {
    console.log(this.state.loggedIn)
    let display;
    if(this.state.loggedIn) {
      display = <PostPage />
    }
    return (
      <div>
        <Login />
        {display}
      </div>
    )
  }
}

export default withAuthenticate;


//Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
