import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import UserRegistrationForm from './components/UserRegistrationForm';
import UserLoginForm from './components/UserLoginForm';
import UserProfileForm from './components/user/UserProfileForm';
import UserProfilePage from './pages/UserProfilePage';
import SewcoserDashboard from './pages/SewcoserDashboard';
// Importa otras páginas aquí

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sewcoser" element={<SewcoserDashboard />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<UserRegistrationForm />} />
        <Route path="/login" element={<UserLoginForm />} />
        <Route path="/profile" element={<UserProfileForm />} />

        {/* Configura otras rutas aquí */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;




