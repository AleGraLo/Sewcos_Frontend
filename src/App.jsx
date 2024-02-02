import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SewcoserPage from './pages/SewcoserPage';
import CartPage from './pages/CartPage';
// Importa otros componentes de página según sea necesario

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sewcoser" element={<SewcoserPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Define más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;


