import moon from './fullmoon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="logo" />
        <p>
          shoot for the moon
        </p>
        <form>
          <input type="email" placeholder="enter your email" />
          <button className="submit_email" type="submit">stay in the loop</button>
        </form>
      </header>
    </div>
  );
}

export default App;
