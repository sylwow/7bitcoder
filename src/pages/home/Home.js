import React from 'react';
import logo from '../../assets/logo.svg';
import { Particles } from '../../components/particles/particles';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles />
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
}
