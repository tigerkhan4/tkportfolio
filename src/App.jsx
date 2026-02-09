import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';


function App() {
  console.log("App component is rendering...");
  return (
  <>
  <Hero/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>
  </>
  );
}
export default App;