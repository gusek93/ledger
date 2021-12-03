import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import Axios from "axios";
import { useHistory } from "react-router";
import { useAppContext, setToken } from "../../utils/store";


const apiUrl = 'http://localhost:8000/accounts/token/'

function SignIn() {
    const {dispatch} = useAppContext();
    const history = useHistory();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            username: userId,
            password: userPassword,
        };

        Axios.post(apiUrl, userInfo)
            .then(response => {
                //console.log(response);
                const {
                    data: {token: jwtToken}
                } = response;
                console.log("signIn jwt token check :" + jwtToken);
                dispatch(setToken(jwtToken));
                

                // setJwtToken(jwtToken);
                //history.push('/');
            })
            .catch(error => {
                console.error(error);
                if (error.response) {
                    console.log('아이디/비밀번호를 확인해 주세요');
                }
            });
    }

    return (
        <>
        <h1>로그인 페이지 </h1>
        <div className={'container'}>
            <form onSubmit={onSubmit}>
                <div className= "row mb-3">

                    <div className={`col-sm-12 ${styles.signid}`} >
                        <input 
                            type="id" 
                            className={`form-control ${styles.signid}`} 
                            id="userid" 
                            placeholder="id를 입력해 주세요"
                            onChange={e => setUserId(e.target.value)}
                            value={userId}
                        />
                            
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-12">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="비밀번호를 입력해 주세요"
                            onChange={e => setUserPassword(e.target.value)}
                            value={userPassword}
                        />
                    </div>
                </div>                      
                <button type="submit" className="btn btn-black">Sign in</button>
            </form>    
        </div>
        </>
        
    );
};

export default SignIn;