import React from 'react';
//import PostPage from '../components/PostPage';
//import Login from '../components/Logins/Login';


const withAuthenticate = PostPage => Login =>
  class extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }


  componentDidMount() {
    (localStorage.getItem('user')) ?
    this.setState({ loggedIn: true }) :
    this.setState({ loggedIn: false })
  }

  render() {
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
