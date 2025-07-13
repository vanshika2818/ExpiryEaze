
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Testimonials from './components/Testimonials';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProblemSection />
              <SolutionSection />
              <Testimonials />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
