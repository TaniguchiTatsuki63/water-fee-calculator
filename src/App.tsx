import React from 'react';
import './App.css';
import { useState } from 'react'



function App() {
  const [useamount, setUseAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [diameter, setDiameter] = useState('');

  const handleUseAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseAmount(Number(e.target.value));
  };

  const handleDiameterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDiameter(String(event.target.value));
  };
  const calcValues = () => {
    if (diameter === '13') {
      setResult(1100);
    }
    else if (diameter === '20') {
      setResult(1870);
    }
    else if (diameter === '25') {
      setResult(2970);
    }
    else if (diameter === '40') {
      setResult(57200);
    }
    else if (diameter === '50') {
      setResult(92400);
    }
    else if (diameter === '70') {
      setResult(264000);
    }
    else if (diameter === '100') {
      setResult(550000);
    }
    else if (diameter === '150') {
      setResult(1364000);
    }
    else if (diameter === '200') {
      setResult(6600000);
    }
    else if (diameter === 'kyoyo1') {
      setResult(990);
    }
    else if (diameter === 'kyoyo2') {
      setResult(24200);
    }
    else if (diameter === "") {
      setResult(0);
      return;
    }

    if (useamount <= 1 && useamount <= 20) {
      setResult((prevResult) => prevResult + useamount * 60.5);
    }
    else if (useamount <= 21 && useamount <= 40 ) {
      setResult((prevResult) => prevResult + 20*60.5 + (useamount-20) * 88);
    }
    else if (useamount <= 41 && useamount <= 60 ) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + (useamount-40) * 143);
    }
    else if (useamount <= 61 && useamount <= 80 ) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + 20 *143 + (useamount-60) * 187);
    }
    else if (useamount <= 81 && useamount <= 100 ) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + 20 *143 + 20*187 + (useamount-80) * 220);
    }
    else if (useamount <= 101 && useamount <= 200 ) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + 20 *143 + 20*187 + 20*220 + (useamount-100) * 242);
    }
    else if (useamount <= 201 && useamount <= 1000 ) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + 20 *143 + 20*187 + 20*220 + 100*242 + (useamount-200) * 264);
    }
    else if (1001 <= useamount) {
      setResult((prevResult) => prevResult + 20*60.5 + 20*88 + 20 *143 + 20*187 + 20*220 + 100*242 + 264*800 + (useamount-1000) * 275);
    }
  };
  return (
    <>
      <div className='App-header'>
        <h1 className='h1'>水道料金計算機</h1>       
      </div>
      <div className="container">
        <div className='input-container'>
          <label className='label' htmlFor="diameter">管径(mm):</label>
          <select className='input' id="diameter" value={diameter} onChange={handleDiameterChange}>
            <option value="" disabled>Select</option>
            <option value="13">13mm</option>
            <option value="20">20mm</option>
            <option value="25">25mm</option>
            <option value="40">40mm</option>
            <option value="50">50mm</option>
            <option value="70">70mm</option>
            <option value="100">100mm</option>
            <option value="150">150mm</option>
            <option value="200">200mm</option>
            <option value="kyoyo1">共用1</option>
            <option value="kyoyo2">共用2</option>
          </select>
        </div>
        <div className='input-container'>    
          <label className='label' htmlFor="useamount">使用量(m<sup>3</sup>):</label>
          <input className='input' id="useamount" type="number" step="1" value={useamount} onChange={handleUseAmountChange} />
        </div>
      </div>
      <div className='button-container'>
        <button className='button' onClick={calcValues}>計算</button>
      </div>
      <div className='result'>
        今月の水道料金: {result}円
      </div>
    </>
  );
}

export default App;
