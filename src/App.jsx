import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NotFound from './components/404';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
