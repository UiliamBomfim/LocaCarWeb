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

      </header>
    </div>
  );
}

export default App;
