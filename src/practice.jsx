import React, {useState} from 'react';

import './App.css'

// write a function to calculate mortgage payments

function calculateMortgagePayment(principal, interestRate, term) {
    // Convert interest rate to decimal
    interestRate = interestRate / 100 / 12;
    // Compute mortgage payment
    return principal * interestRate / (1 - (Math.pow(1 / (1 + interestRate), term)));
}

function App() {

    const[loan,setloan]= useState({
        principal:0,
        interest:0,
        term:0,
    })
    const[Mortgagepayment,setMortgagePayment]=useState(0);
    const handleChange  = event =>{
        const inputEelement = event.target
        console.log("Value",inputEelement.value);
        console.log("Dataset",inputEelement.dataset.value);
        const value= inputEelement.value;
        const property = inputEelement.dataset.prop;
    const updateloan= {
        ...loan,
        [property]:value
        };
    setloan(updateloan)

    };
    const calculateMortgage= () => {
        setMortgagePayment(calculateMortgagePayment(loan.principal,loan.interest,loan.term));
    }




    return(
        <div>
            <h1> Modgage Calculator</h1>
            <input data-prop={'principle'} type="text" placeholder={'principle'} onChange={handleChange}/>
            <input data-prop={'interest'} type="text" placeholder={'interest'} onChange={handleChange}/>
            <input data-prop={'term'} type="text" placeholder={'term'} onChange={handleChange}/>
            <button onClick={calculateMortgage}>Calculate</button>
            <h2>The mortgage value is ${Mortgagepayment.toFixed(2)}</h2>
        </div>
    )
}

export default App