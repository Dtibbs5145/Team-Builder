import React, { useState } from 'react';
import './App.css';
import Member from './components/Member';
import Form from './components/Form';


function App(props) {
  const [members, setMembers] = useState([
    {
        id: 1,
        name: "Bob Ross",
        email: "happy@littletree.com",
        role: "designer"
    }
]);

  const newMember = members => {
    const addMember = {
        id: members.id,
        name: members.name,
        email: members.email,
        role: members.role
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
