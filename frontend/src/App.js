<<<<<<< HEAD
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [locadora, setLocadora] = useState([]);

  useEffect(() => {
    const loadData = () => {
      fetch('/api/locadora/')
        .then(response => response.json())
        .then(data => setLocadora(data))
    }
    loadData();

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {locadora.map(funcionarios => (
          <h1 key={funcionarios.id}>{funcionarios.nome} </h1>
        ))}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
>>>>>>> 13a237bafbd97b78b31a20e0fbf5f27e33e8ca15
      </header>
    </div>
  );
}

export default App;
