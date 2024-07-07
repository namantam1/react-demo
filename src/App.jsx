import { useState } from 'react';
import './App.css'
// import Component1 from './Component1';
import ApiExample from './assets/ApiExample';

function App() {
  // let name = "Shalu 1";

  // const nameHook = useState("Shalu");
  // const name = nameHook[0];
  // const changeName = nameHook[1];

  const [name, changeName] = useState("shalu");

  const [counter, setCounter] = useState(0);

  const onClick = () => {
    // console.log(name);
    // name = "Hi Naman";
    // console.log(name);

    changeName("Naman");
  }

  const increase = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Hi {name} - {counter}</h1>
      <button onClick={increase}>
        submit
      </button>
      <br/>
      <br/>
      {/* <Component1 name={name} age={10} /> */}

      <ApiExample />
    </div>
  )
}

export default App
