import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Styles
import "Styles/Abstract/Variables.css";
import "Styles/Abstract/Mixins.css";
import "Styles/Abstract/Fonts.css";

import "Styles/Base/Reset.css";
import "Styles/Base/Typography.css";
import "Styles/Base/Animation.css";
import "Styles/Base/Utilities.css";

import "Styles/Layouts/Center.css";
import "Styles/Layouts/Flex.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
