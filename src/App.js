import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Agents from './pages/Agents';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Properties from './pages/Properties';

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <About />
      <Agents />
      <Properties />
      <Contact />
    </>
  );
}

export default App;
