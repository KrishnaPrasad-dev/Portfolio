import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Navbar from './sections/Navbar.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      
    </main>
  );
};

export default App;
