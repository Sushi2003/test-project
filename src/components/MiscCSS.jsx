import React, {useState} from 'react';

function MiscCSS() {
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

export default MiscCSS