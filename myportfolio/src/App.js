import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
