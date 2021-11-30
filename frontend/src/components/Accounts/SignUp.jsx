import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";


const apiUrl ='http://localhost:8000/accounts/signup/'

function SignUp() {
    const history = useHistory();
    const [userId, setUserId] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userId, userPassword, userEmail);
        const userdata  = {
            username: userId,
            password: userPassword,
            email: userEmail,
        };

        Axios.post(apiUrl, userdata)
            .then(response => {
                console.log(response);
                history.push("/")
            })
            .catch(error => {
                console.error(error);
                if (error.response) {
                    console.log(error.response.data.username);
                }
            });

    };

    return (
        <>
        <h1>회원가입 페이지</h1>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">ID</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userid" 
                        name="userid" 
                        placeholder="아이디"
                        onChange={e => setUserId(e.target.value)}
                        value={userId}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="비밀번호"
                        onChange={e => setPassword(e.target.value)}
                        value={userPassword}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail4" 
                        placeholder="이메일 입력"
                        onChange={e => setUserEmail(e.target.value)}
                        value={userEmail}
                    />
                </div>                                   
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">완료</button>
                </div>
            </form>
        </>
    );
}

export default SignUp;