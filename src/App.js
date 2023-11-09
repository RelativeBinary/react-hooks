import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import PaginateResults from './components/PaginateResults';
import PaginateResultsHooked from './components/PaginatedResultsHooked';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>PaginatedResults</h1>
      <PaginateResults />
      <h1>PaginatedResultsHooked</h1>
      <PaginateResultsHooked />
    </div>
  );
}

export default App;
