import logo from './logopizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Afinal tem algo melhor que uma pizza? Sim DUAS!!
        </p>
        <a
          className="App-link"
          href="https://www.pizzahut.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          I food
        </a>
      </header>
    </div>
  );
}

export default App;
