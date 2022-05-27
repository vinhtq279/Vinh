import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie';
import reactDom from "react-dom";

const LoginForm = (props) => {
    const [username, setUserName] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const handleSubmit = (event) => {
        setCookie('username', username, { path: '/'});
    }
    return (
        <div className="auth mx-auto">
            <form className="" action="/" method="get">
                <div className="form-group">
                    <h4 className="text-center pb-3">User Login</h4>
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" id="username" onChange={(event) => {setUserName(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="username"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary w-100 mt-2" onClick={handleSubmit}>Login</button>
                </div>
                <div>
                    <p>Forgot password? <Link to="/password-reset-account-verify">Click to Reset</Link></p>
                </div>
                <div>
                    <p>New user? <Link to="/registration">Click to Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;