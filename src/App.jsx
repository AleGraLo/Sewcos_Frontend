import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SewcoserPage from './pages/SewcoserPage';
import CartPage from './pages/CartPage';
// Importa otras páginas aquí

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sewcoser/:id" element={<SewcoserPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Configura otras rutas aquí */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;




