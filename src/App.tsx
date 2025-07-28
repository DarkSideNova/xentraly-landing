import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './app/presentation/pages/home';
import ProductsIndex from './app/presentation/pages/products';
import AboutUsIndex from './app/presentation/pages/about-us';
import ContactUsIndex from './app/presentation/pages/contact-us';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex/>} />
        <Route path="/products" element={<ProductsIndex/>} />
        <Route path="/about-us" element={<AboutUsIndex/>} />
        <Route path="/contact-us" element={<ContactUsIndex/>} />
      </Routes>
    </Router>
  )
}

export default App
