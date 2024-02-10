import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional, for measuring performance

// React 17 and earlier
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from 'react';
// import { createRoot } from 'react-dom/client'; 
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );