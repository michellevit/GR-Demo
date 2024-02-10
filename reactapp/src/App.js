import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>This is a test page to confirm our React-Rails integration is working.</p>
    </div>
  );
}

export default App;




// import React from "react";
// import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import here
// import "./App.css";
// import Nav from "./components/Nav";
// import AllProducts from "./pages/AllProducts";
// import SingleProduct from "./components/SingleProduct";

// function App() {
//   return (
//     <div className="app">
//       <Nav />
//       <div className="container">
//         <Routes>
//           <Route path="home" element={<AllProducts />} />
//           <Route path="/" element={<AllProducts />} /> 
//           <Route path="browse-products" element={<AllProducts />} /> 
//           <Route path="product/:id" element={<SingleProduct />} /> 
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;