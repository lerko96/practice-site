import logo from './logo.svg';
import './App.scss';
import QuoteGenerator from './components/QuoteGenerator.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <QuoteGenerator />
    </div>
  );
}

export default App;
