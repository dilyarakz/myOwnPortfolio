import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';



function App() {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>

      <Footer id="footer" />
    </div>
  );
}

export default App;
