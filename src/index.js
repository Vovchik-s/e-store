import React from 'react';
import { render } from 'react-dom';
import { UserProvider } from './context/user.context'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter is leverages the URL in order to keep track of the history of where the user is navigating through 

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
    {/* Routes in App.js works only because it wrappet insided BrowserRouter. Its allows to read requests to diff pages*/}
  </React.StrictMode>,
  document.getElementById('root')
);



