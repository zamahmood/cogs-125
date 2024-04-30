import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="container">
          <button class="tab-button" onclick="openTab(event, 'tab1')">About Me</button>
          <button class="tab-button" onclick="openTab(event, 'tab2')">Projects</button>
          <button class="tab-button" onclick="openTab(event, 'tab3')">Contact</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Zahrah's Portfolio
        </p>
        <a
          className="App-link"
          href="youtube.com"
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
