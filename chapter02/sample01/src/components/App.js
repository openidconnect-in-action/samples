import React from 'react';
import { useAuth0 } from '@facilelogin/oidc-react';

function App() {
  const {isLoading,isAuthenticated,error,user,loginWithRedirect,logout,} = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    console.log(user.id);
    return (
      <div>
        Hello {user.sub}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;