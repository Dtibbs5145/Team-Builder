import React from 'react';
import './App.css';
// import Form from './components/Form';
import Member from './components/Member';
import Form from './components/Form';

function App(props) {
  return (
    <div className="App">
      <h1>Team Builder Project</h1>
      <Member />
      <Form />
    </div>
  );
}

export default App;
