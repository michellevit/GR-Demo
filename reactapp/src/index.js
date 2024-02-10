import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component

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