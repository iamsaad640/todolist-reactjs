import logo from './logo.png';
import Todolist from "./Todolist-Component/Todolist"
import './App.css';
import { useState } from 'react';



function App() {
  
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  
  return (
    <>

      <div className="App">

        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <div className='ProgressBar'>
            <div className='progress' style={{width:`${count !== 0 ? (progress / count) * 100 : 100}%`}}></div>
          </div>
        </header>
        <main>
          <Todolist count={count} progress={progress} setCount={setCount} setProgress={setProgress} />
        </main>

      </div>
    </>
  );
}

export default App;
