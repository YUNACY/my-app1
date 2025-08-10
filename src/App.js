import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>こんにちは！Reactアプリを修正しました！</h1>
      <p>これは私の最初の変更です。</p>
      <p>何を作ろうかな。</p>
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
