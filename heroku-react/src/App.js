import logo from './logo.svg';
import herokuLogo from './herokuLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logos">
          <img src={herokuLogo} className="App-heroku-logo" alt="Heroku logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Heroku/React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
