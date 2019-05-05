import React from 'react';
import PostPage from './components/PostPage'
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Logins/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

const App = props => {
  return (
    <ComponentFromWithAuthenticate />
  )
}

export default App;
