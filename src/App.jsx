import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import { ROUTES } from './routes/Routes';
import About from './pages/about/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Resume from './pages/resume/Resume';
import Service from './pages/service/Service';
import Contact from './pages/contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main route that renders all sections */}
          <Route index element={
            <>
              <Dashboard />
              <About />
              <Resume />
              <Service />
              <Contact />
            </>
          } />

          Catch-all route for direct section access
          <Route path=":section" element={
            <>
              <Dashboard />
              <About />
              <Resume />
              <Service />
              <Contact />
            </>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
