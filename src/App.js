import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [paino, setPaino] = useState(0);
  const [Intensiteetti, setIntensiteetti] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);


  function laske(e) {
    e.preventDefault();
    let kalorit = 0;
    if (sukupuoli == "mies") {
      kalorit = (879 + 10.2 * paino) * Intensiteetti;
    } else {
      kalorit = (795 + 7,18 * paino) * Intensiteetti;
    }
    setTulos(kalorit);
  }
  return (
  <form>
    <h3>Laske kalorikulutus</h3>
    <div>
      <label>Paino</label>
      <input type="number" value={paino} onChange={e => setPaino(e.target.value)}/>
    </div>
    <div>
      <label>Intensiteetti</label>
      <select onChange={e => setIntensiteetti(e.target.value)}>
      <option value="1.3">Kevyt</option>
      <option value="1.5">Tavallinen</option>
      <option value="1.7">Kohtuullinen</option>
      <option value="2">Kova</option>
      <option value ="2.2">Erittäin kova</option>
    </select>
    </div>
    <div>
      <label>Sukupuoli</label>
      <label><input type="radio" value="mies" defaultChecked onChange={e => setSukupuoli(e.target.value)}/>Mies</label>
      <label><input type="radio" value="nainen" defaultChecked onChange={e => setSukupuoli(e.target.value)}/>Nainen</label>
    </div>
    <div>
      <output>{tulos.ToFixed(0)}</output>
    </div>
    <button type="button" onClick={laske}>Calculate</button>
    </form>
  );
}

export default App;
