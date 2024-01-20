import React, { useState } from 'react'

export const Power = () => {

  const [number, setNumber] = useState("");
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");

  const powerFunction = () => {

    let result = Number(number) * 2;

    console.log(result);
    setResult(result);
  }

  const cleanData = () => {
    setNumber("");
  }

  return (
    <div className='input__container'>

      <input type="number" value={number} 
        onChange={e => setNumber(e.target.value)} 
      />
      
      <button
        type='submit'
        onClick={powerFunction}
      >
        Power 2 by 2
      </button>
      <button
        type='reset'
        className='btn__reset'
        onClick={cleanData}
      >
        Reset
      </button>

      <div className="result">
        <strong>{setCount(count => count + 1)}</strong>
        <strong>The power is:</strong> {result}
      </div>
    </div>
  )

}
