import React, { useState } from 'react';

const EventPracticeFunction = () => {
    const [form,setForm] = useState({message:'', username:''}) // 두가지 이상의 입력값을 넣어야 하니까 object로다가 처리함 
    const {message, username} = form; // 비할당으로 state명만 다시 꺼냄
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h1>이벤트 연습하기 - 함수</h1>
                <input type='text' name='message' placeholder='입력해주세요.' 
                    onChange={handleChange}
                /> <br />
                message : {message}
                <hr />
                <input type='text' name='username' placeholder='입력해주세요.' 
                    onChange={handleChange}
                /> <br />
                username : {username}
        </div>
    );
};

export default EventPracticeFunction;