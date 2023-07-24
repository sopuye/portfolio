import './App.css';
import React from 'react';
import About from "./components/About";

/*
git add .
git commit -m "message"
git push origin HEAD:master
*/

function App() {
  return (
    <main>
      <h1 className='text-9xl'>Yo</h1>
      <h1 className='text-2xl underline'>yo</h1>
      <About />
    </main>
  );
}

export default App;
