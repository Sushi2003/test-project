import React, {useState} from 'react';
import {chunk} from 'lodash';

import MiscCSS from "./components/MiscCSS.jsx";
import Calculator from "./components/Calculator.jsx";

import './App.css'

function App() {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    // split the above array into 3 chunks
    const chunkedArr = chunk(arr, 3);
    console.log('chunkedArr', chunkedArr);
    return (
      <>
        <Calculator />
      </>
      // <MiscCSS/>
    )
}

export default App