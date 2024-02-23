import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message:'',
        username:''
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습하기</h1>
                <input type='text' name='message' placeholder='입력해주세요.' 
                    onChange={this.handleChange}
                /> <br />
                message : {this.state.message}
                <hr />
                <input type='text' name='username' placeholder='입력해주세요.' 
                    onChange={this.handleChange}
                /> <br />
                username : {this.state.username}
            </div>
        );
    }
}

export default EventPractice;