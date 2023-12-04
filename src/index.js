import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Importing your App component
// Other imports if necessary...

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* No Router here, as it's already in App.js */}
  </React.StrictMode>,
  document.getElementById('root')
);
