import React, {useState} from 'react';

// design pattern -> descriptive names for variables
//  keywords -> const, let, var, function

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operations = {
  add,
  subtract,
  multiply,
  divide,
}


function Calculator() {
  const [operands, setOperands] = useState({
    x: 0,
    y: 0,
  });
  // const  [result, setResult] = state;
  // const result = state[0];
  // const setResult = state[1];


  const [solution, setSolution] = useState(0);
  const handleChange = event => {
    const inputHandler = event.target;
    const prop = inputHandler.dataset.prop;
    const val = inputHandler.value;

    const updatedResult = {
      ...operands,
      [prop]: parseInt(val),
    }
    setOperands(updatedResult);

  }

  const calculate = (e) => {
    // const operationName = e.target.dataset.prop; // 'add'
    const {prop: operationName} = e.target.dataset;
    const fn = operations[operationName]; // operations.add
    const {x, y} = operands;
    const result = fn.apply(null, [x, y]); // apply works?
    console.log('result', result);
  }

  return (
    <div>
      <h1 className="cal">Calculator</h1>
      <input className="n1" data-prop='x' type='number' placeholder='Enter the First number'
             onChange={handleChange}/>
      <input className="n2" data-prop='y' type='number' placeholder='Enter the Second number'
             onChange={handleChange}/>
      <div>
        <button data-prop="add" onClick={calculate}>Add</button>
        <button data-prop="subtract" onClick={calculate}>Subtract</button>
      </div>
      <button data-prop="divide" onClick={calculate}>Divide</button>
      <button data-prop="multiply" onClick={calculate}>Multiply</button>

      <h2 className="cal"> The result after performing the operation is ${solution}</h2>

    </div>
  )
}


export default Calculator