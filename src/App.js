import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/modules">CSS Modules</Link>
        <Link to="/styled">Styled Components</Link>
      </header>

    </div>
  );
}

export default App;
