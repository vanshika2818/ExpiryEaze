import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Testimonials from './components/Testimonials';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <Testimonials />
          </>
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
