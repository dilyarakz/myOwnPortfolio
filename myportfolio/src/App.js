import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <Home />
      <Footer id="footer" />
    </div>
  );
}

export default App;
