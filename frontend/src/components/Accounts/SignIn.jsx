import React from "react";
import styles from "./SignIn.module.scss";

function SignIn() {
    return (
        <>
        <h1>로그인 페이지 </h1>
        <div className={'container'}>
            <form>
                <div className= "row mb-3">

                    <div className={`col-sm-12 ${styles.signid}`} >
                        <input type="id" className={`form-control ${styles.signid}`} id="inputEmail3" placeholder="id를 입력해 주세요"/>
                    </div>
                </div>
                <div className="row mb-3">

                    <div className="col-sm-12">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="비밀번호를 입력해 주세요"/>
                    </div>
                </div>                      
                <button type="submit" className="btn btn-black">Sign in</button>
            </form>    
        </div>
        </>
        
    );
};

export default SignIn;