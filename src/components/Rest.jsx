import React, { useState } from 'react'
import '../App.css'

export const Rest = () => {

  const [numberone, setNumberOne] = useState(0);
  const [numbertwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  const restFunction = (e) => {

    let target = e.target;
    let valueInputOne = target.number1.value;
    let valueInputTwo = target.number2.value;

    let operation = valueInputOne - valueInputTwo;
    setResult(operation);

    console.log(setResult);
  }

  return (
    <div className='input__container'>

      <input type="number" name='number1' 
        onChange={e => console.log(e.target.value)} 
      />
      <input type="number" name='number2' 
        onChange={e => console.log(e.target.value)} 
      />
      <button
        type='submit'
        onClick={restFunction}
      >
        Rest both numbers
      </button>

      <div className="result">
        <strong>The rest is:</strong> {numberone - numbertwo}
      </div>
    </div>
  )
  
}
