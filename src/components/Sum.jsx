import React, { useState } from 'react'
import '../App.css'

export const Sum = () => {

  const [numberone, setNumberOne] = useState(0);
  const [numbertwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  const sumFunction = (e) => {

    let target = e.target;
    let valueInputOne = target.number1.value;
    let valueInputTwo = target.number2.value;

    setNumberOne(valueInputOne);
    setNumberTwo(valueInputTwo);

    let operation = valueInputOne + valueInputTwo;
    setResult(operation);

    console.log(setResult);
  }

  return (
    <div className='input__container'>

      <input type="number" id='number1' 
        onChange={e => console.log(e.target.value)} 
      />
      <input type="number" id='number2' 
        onChange={e => console.log(e.target.value)} 
      />
      <button
        type='submit'
        onClick={sumFunction}
      >
        Sum both numbers
      </button>

      <div className="result">
        <strong>The sum is:</strong> {numberone + numbertwo}
      </div>
    </div>
  )
  
}
