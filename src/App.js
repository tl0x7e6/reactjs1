import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function ClickButton() {

  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={ () => setClicks(old => old + 1) }>click! { clicks } times</button>
  );
}

function App() {
  return (
    <div className="App">

      <ClickButton />
      <ClickButton />

      <br />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
