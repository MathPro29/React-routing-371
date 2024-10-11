// AppRouter.jsx

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// function AppRouter() {
//   return (
//     <Router>
//       <div>
//         {/* Navigation */}
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default AppRouter;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Product from './pages/Product';  // Dynamic route for product
// import User from './pages/User';        // Dynamic route for user
// import About from './pages/About';

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Dynamic Route for about */}
//         <Route path="/about" element={<About />} />
//         {/* Dynamic Route for product */}
//         <Route path="/product/:productId" element={<Product />} />
//         {/* Dynamic Route for user */}
//         <Route path="/user/:userId" element={<User  />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Form from './pages/Forms';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/pages/:productId" element={<ProductDetail />} />
        <Route path="/add-product" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

