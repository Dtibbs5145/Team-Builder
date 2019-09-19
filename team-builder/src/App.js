import React, { useState } from 'react';
import './App.css';
import Member from './components/Member';
import Form from './components/Form';


function App() {
  const [members, setMembers] = useState([
    {
        id: 1,
        name: "Bob Ross",
        email: "happy@littletree.com",
        role: "Designer"
    }
]);

  // const newMember = members => {
  //   const addMember = {
  //       id: members.id,
  //       name: members.name,
  //       email: members.email,
  //       role: members.role
  //   };
  //   setMembers([ ...members, addMember ]);
  // };

  const newMember = credentials => {
    const addMember = {
        id: Date.now(),
        name: credentials.name,
        email: credentials.email,
        role: credentials.role
    };
    setMembers([...members, addMember]);
  };

  return (
    <div className="App">
      <h1>Team Builder Project</h1>
      <Member members={members} />
      <Form newMember={newMember} />
    </div>
  );
}

export default App;
