import React, {useState} from 'react';

import './App.css'

function add(number1,number2) {
    return number1+number2

}
function sub(number1,number2) {
    return number1-number2

}
function div(number1,number2) {
    return number1/number2

}
function mul(number1,number2) {
    return number1*number2

}

function App() {
    const[result,setResult]= useState({
        number1:0,
        number2:0,
    });
    const[solution,setSolution]=useState(0);
    const handleChange=event=>{
        const inputHandler= event.target;
        console.log("Number-",inputHandler.dataset.prop);
        console.log("Value-",inputHandler.value);
        const Number = inputHandler.dataset.prop;
        const Value= inputHandler.value;

        const updatedResult={
            ...result,
            [Number]:Value,
        }
        setResult(updatedResult);

    }
    const addResult= () => {
        setSolution(add(result.number1,result.number2))
    }
    const subResult= () => {
        setSolution(sub(result.number1,result.number2))
    }

    const divResult= () => {
        setSolution(div(result.number1,result.number2))
    }

    const mulResult= () => {
        setSolution(mul(result.number1,result.number2))
    }








    return (
        <div>
            <h1 className="cal">Calculator</h1>
            <input className="n1" data-prop='Number1' type='text' placeholder='Enter the First number' onChange={handleChange}/>
            <input className="n2" data-prop='Number2' type='text' placeholder='Enter the Second number' onChange={handleChange}/>
            <div>
                <button className="add" onClick={addResult}> Add </button>
                <button className="sub" onClick={subResult}>Subtract</button>
            </div>
            <button  className="div" onClick={divResult}>Divide</button>
            <button  className="mul" onClick={mulResult}>Multiply</button>

            <h2 className="cal"> The result after performing the operation is ${solution}</h2>

        </div>
    )
}



export default App
// #root {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 2rem;
//     text-align: center;
//
// }
// .add{
//     color: red;
//     background-color: white;
//     padding: 8px;
//     margin: 20px;
// }
// .sub{
//     color: palegreen;
//     background-color: violet;
//     padding: 8px;
//     margin: 20px;
// }
// .mul{
//     color: black;
//     background-color: aqua;
//     padding: 8px;
//     margin: 20px;
// }
//
// .n1{
//     color: black;
//     background-color: greenyellow;
//     padding: 8px;
//     margin: 20px;
// }
// .n2{
//     color: black;
//     background-color: greenyellow;
//     padding: 8px;
//     margin: 20px;
// }
//
// .cal{
//     font-style: italic;
//     color: yellow;
// }