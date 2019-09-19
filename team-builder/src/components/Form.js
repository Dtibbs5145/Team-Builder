import React, { useState } from 'react';

function Form (props) {
    const [members, setMembers] = useState(
        {
            id: 1,
            name: "Bob Ross",
            email: "happy@littletree.com",
            role: "designer"
        }
    );

    const handleChanges = e => {
        console.log(members);
        setMembers({ ...members, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        props.newMember(members);
        setMembers({ name: '', email: '', role: '' });
    };


    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={members.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id='email'
                type='text'
                name='email'
                onChange={handleChanges}
                value={members.email}
            />
            <label htmlFor="role">Role</label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChanges}
                value={members.role}
            />
        </form>
    )
};



export default Form;