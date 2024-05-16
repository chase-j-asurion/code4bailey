import './App.css';
import { useState } from 'react';
import { add } from './learning/add';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [answer, setAnswer] = useState();
  const onlyNumbers = (value, func) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      func(value);
    } else {
      func('');
    }
    setAnswer();
  }
  return (
    <div className="App">
      <div>Calculator</div>
      <span>Number 1</span><input onChange={e => onlyNumbers(e.target.value, setNumber1)}></input>
      <div></div>
      <span>Number 2</span><input onChange={e => onlyNumbers(e.target.value, setNumber2)}></input>
      <div>{number1 ?? '?'} + {number2 ?? '?'} = {answer ?? '?'}</div>
      {/* TODO: Make the add here use the add function and pass in the right variables */}
      <button onClick={() => setAnswer(add)}>Add</button>
    </div>
  );
}


export default App;
