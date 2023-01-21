import React, {useState} from 'react';

import './App.css'

function App() {
    return (
        <div>
            <label className="Rate">Price</label>
            <div>
                <input  type='text' placeholder='0.00$' className="curr"/>
                <select className="opt">
                    <option> USD </option>
                    <option> CAD </option>
                    <option> EUR </option>

                </select>

            </div>
        </div>
    )
}
















export default App