import './App.css';
import React, { useState } from "react";

function App() {
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');

  let calcbmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      let rel = (weight / (height * height) * 703);
      setBmi(rel.toFixed(1));
    }

    if (bmi < 18) {
      setMessage("You are underweight");
    } else if (bmi > 25) {
      setMessage("You are over weight");
    } else {
      setMessage("You are healthy weight");
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight in lbs</label>
            <input type="text" placeholder="Enter weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height in inch</label>
            <input type="text" placeholder="Enter height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={() => window.location.reload()} type='button'>Reload</button>
          </div>

          <div className='centre'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

