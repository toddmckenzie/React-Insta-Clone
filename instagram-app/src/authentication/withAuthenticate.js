import React from 'react';


const withAuthenticate = App => LoginPage => class extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <App />
    )
  }
}

export default withAuthenticate;


//Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
