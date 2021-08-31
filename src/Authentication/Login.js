import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import slack from "./slack.jpg"
import db,{ auth,provider  } from '../database/firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {
    const [state,dispatch] = useStateValue();
    const signIn = ()=>{
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <>
        <div className="login">
            <div className="login_container">
            <img
            src={slack}
            alt="slack"
            />
            <h2>Sign in with sunil slack</h2>
            <p>sunil.slack.com</p>
            <Button onClick={signIn}><span className="signin">Sign in with Google</span></Button>
            </div>
        </div>
        </>
    )
}

export default Login
