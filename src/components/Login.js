import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "../firebase"
import { useDispatch } from 'react-redux';
import { login } from '../data/redux/userSlice';


function Login() {
    const dispatch = useDispatch();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch(login({
                username: result.user.displayName,
                avatarSrc: result.user.photoURL,
                id: result.user.uid
            }))
        })
        
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="./assets/LogoImage.png" alt="Logo"/>
                <h1>Login</h1>
                <Button className="login__button" onClick={signIn}>
                    Sign With Google
                    <img src="./assets/Logo.png" alt="Logo"
                     className="login__icon"/>
                </Button>
            </div>
        </div>
    )
}

export default Login
