import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.js";
import { Auth0Provider } from '@facilelogin/oidc-react';


ReactDOM.render(
    <Auth0Provider
      domain="oauth2.googleapis.com"
      tokenEp="https://oauth2.googleapis.com/token"
      authzEp="https://accounts.google.com/o/oauth2/v2/auth"
      clientId="450443992251-9l17d82cli8npa9cdrvcp1g9m17gft9u.apps.googleusercontent.com"
      issuer="https://localhost:9443/oauth2/token"
      redirectUri={window.location.origin}
    >
    <App />
  </Auth0Provider>,
  document.getElementById('book-club-app')
);

// ReactDOM.render(
//   <OIDCProvider
//     domain="localhost:9443"
//     tokenEp="https://localhost:9443/oauth2/token"
//     authzEp="https://localhost:9443/oauth2/authorize"
//     clientId="D4ZoMSpsxqgvUuiC6j5ROnEYea0a"
//     issuer="https://localhost:9443/oauth2/token"
//     redirectUri={window.location.origin}
//   >
//   <App />
// </OIDCProvider>,
// document.getElementById('book-club-app')
// );


