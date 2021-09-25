import './App.scss';
import QuoteGenerator from './components/QuoteGenerator.js';
import TaskManager from './components/TaskManager';
import Header from './components/Header';

function App() {
  const name = 'tyler'

  return (
    <div className="App">
      <Header />
      <TaskManager />
      {/* <h1>hello {name} from react</h1> */}
      {/* <QuoteGenerator /> */}
    </div>
  );
}

export default App;
