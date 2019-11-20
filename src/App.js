import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3000/persist', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + localStorage.token
        }
      })
        .then(r => r.json())
        .then(data => {
          console.log('USERRRRRR   +++++ ', data);
        });
    }
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
