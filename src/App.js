import React from 'react';

function App() {
  // const greeting = 'Hi, Tom!';
  // const dom = <h1 className="App">{greeting}</h1>
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log('I am clicked')}} />
    </React.Fragment>
  );
}

export default App;
