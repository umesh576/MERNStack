import { useState } from "react";
import "./App.css";

function App() {
  /* let explain how useState work
  
  actually counter is a variable and setCounter is a funcction which is responsible for the cahnge the state of the counter 
  and useState(2) means that the set the counter default value is 2
  */
  const [counter, setCounter] = useState(2);
  // let counter = 5;
  const addValue = () => {
    /*  setcounter is a functon or method which can cahnge the value or satet of the counter and update in all the state */

    if (counter >= 10) {
      console.log("value Overflow");
    } else {
      setCounter(counter + 1);
      console.log(counter);
    }
  };
  const decValue = () => {
    if (counter <= 0) {
      console.log("Value underflow");
    } else {
      setCounter(counter - 1);
      console.log(counter);
    }
  };
  return (
    <>
      <h1>counter value</h1>
      <p id="hey">counter value: {counter}</p>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value</button>
    </>
  );
}

export default App;
