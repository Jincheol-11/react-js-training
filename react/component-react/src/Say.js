import React, { useState } from 'react';

const Say = () => {
    const [message,setMessage] = useState('')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => {
                setMessage('HI')
            }}>입장</button>
            <button onClick={() => {
                setMessage('견뎌')
            }}>퇴장</button>
        </div>
    );
};

export default Say;