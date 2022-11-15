import React from 'react';
import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

import "../login.css"
import logo from "../Logo.svg"


const loginUrl = '/Authentication/LoginUser';


const LoginComponent = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg();
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(loginUrl, JSON.stringify({phoneNumber: user, password: pwd}),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const session = response?.data?.session
            setUser('')
            setPwd('')
        } catch (err) {
            if(!err?.response) {
                setErrMsg('No response from server')
            } else if(err.response?.status === 400) {
                setErrMsg('Missing credentials')
            }else if (err.response?.status === 500){
                setErrMsg('Internal server error')
            }else {
                setErrMsg('Login failed')
            }
            errRef.current.focus();
        }
        setSuccess(true)
    }


    return(
        <div className="login-container">
            <div className="form-container">
                <div className="form-content-left">
                    <img src={logo} alt="Logo"/>

                    <div className="paragraph">
                        <p>
                            Are you a new customer or an 
                            existing customer yet to setup 
                            your online account?
                        </p>
                    </div>

                    <button className="btn-get-started">GET STARTED</button>
                </div>
                <div className="form-content-right">
                    <h4 className="form-header">Log in to your account</h4>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <div className="form-group">
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                                className="form-input" 
                                type="text" 
                                placeholder="Username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />

                            <input 
                                className="form-input" 
                                type="password" 
                                placeholder="Password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button className="btn-submit">Login</button>
                        </form>
                        <p className="forgot-password">Forgot password</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginComponent;