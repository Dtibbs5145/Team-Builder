import React from 'react';
import members from './Form';
// import { tsPropertySignature } from '@babel/types';

const Member = (props) => {
    console.log(props.members);
    return (
        <div>
            {/* {members.map(member => ( */}
                <div key={members.id}>
                    <h2>{members.name}</h2>
                    <p>{members.email}</p>
                    <p>{members.role}</p>
                </div>
            {/* ))} */}
        </div>
    )
};



export default Member;