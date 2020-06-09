import React, { useState } from 'react';
import Tweet from './Tweet';


function App() {

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

  const [users, setUsers] = useState([
    { name: "Joe", message: "Hello there" },
    { name: "John", message: "I am John Snow" },
    { name: "Traversy", message: "I am awesome" }

  ]);

  return (
    <div className="app">
      {/* <Tweet name="Jean" message="Hi there!" />
      <Tweet name="Karl" message="Hello everybody!" />
      <Tweet name="Joe" message="What a wonderful day!" />
      <Tweet name="Sandra" message="I am happy to see you!" /> */}
      {/* <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />

      ))}
    </div>

  );

}

export default App;