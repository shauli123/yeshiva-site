import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './ytka-logo.png'
function App() {
  return (
    <div className="App">
        <Navbar Logo={Logo} className='reactfont'/>
    </div>
  );
}

export default App;
