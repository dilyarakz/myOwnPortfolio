import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
