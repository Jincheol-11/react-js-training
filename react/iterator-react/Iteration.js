import React from 'react';

const Iteration = () => {
    // 반복되는 요소에는 key(id)를 넣어주어야 한다.
    const names = ['javascript','jQuery','React'];
    const namesList = names.map((name,index) => <li key={index}>{name}</li>)
    return (
        <div>
            <ul>
                {namesList}
            </ul>
        </div>
    );
};

export default Iteration;