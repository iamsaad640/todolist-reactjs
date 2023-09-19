import logo from './logo.svg';
import Todolist from "./Todolist"
import './App.css';
import useCount from './useCount';



function App() {
  const [count, progress] = useCount();
  return (
    <>

      <div className="App">

        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <div className='ProgressBar'>
            <div className='Progress'></div>
          </div>
        </header>
        <main>
          <Todolist/>
        </main>

      </div>
    </>
  );
}

export default App;
