import React from 'react';

const Member = (props) => {
    console.log(props.members);
    return (
        <div>
            {props.members.map(member => (
                <div className='members' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
};



export default Member;