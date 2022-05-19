import logo from './logo.svg';
import dockerLogo from './docker-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={dockerLogo} className="App-logo" alt="Docker logo" />
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          {' com '}
          <a
            className="App-link"
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
