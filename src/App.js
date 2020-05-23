import React from 'react';
import logo from './logo.svg';
import Menu from './component/Menu';
import './App.css';
import Welcome from './component/welcomepic';
import Job from './component/job';
function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <Welcome></Welcome>
    <Job></Job>
    </div>
  );
}

export default App;
{ /* <header className="App-header">
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
  </header>*/}