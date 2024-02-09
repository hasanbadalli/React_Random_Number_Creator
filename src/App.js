import React, { useState } from 'react';
import './style.css';

function App() {
  const [minVal, setminVal] = useState(0);
  const [maxVal, setmaxVal] = useState(10);
  const [randomNum, setrandomNum] = useState(5);
  function getMax(event){
    setmaxVal(+event.target.value);
  }
  function getMin(event){
    setminVal(+event.target.value);
  }
  function getRandom(){
    setrandomNum(Math.floor(Math.random() * (maxVal-minVal+1))+minVal);
    console.log(minVal);
    console.log(maxVal);
  }
  return (
    <div class="main">
      <div className="container">
        <div className="randomNum">
          <p>Random Number: {randomNum}</p>
        </div>
        <div className="minmaxNum">
          <div className="min">
            <p>Minimum Number:</p>
            <input onChange={getMin} type="number" placeholder={minVal} value={minVal}/>
          </div>
          <div className="max">
            <p>Maximum Number:</p>
            <input onChange={getMax} type="number" placeholder={maxVal} value={maxVal}/>
          </div>
          <button onClick={getRandom}>Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
