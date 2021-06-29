import React from 'react'
import { Button } from '@material-ui/core';
import './Login.css';

import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch]=useStateValue();
    const signIn=()=>{
         auth.signInWithPopup(provider)
         .then((result)=>{
             console.log(result)
             dispatch({
                 type:actionTypes.SET_USER,
                 user:result.user,
             });
         })
         .catch((error)=>alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login_container'>
                <img
                    src='https://tse2.mm.bing.net/th?id=OIP.QawMjWNWeNr72kQWzl7JxAHaHa&pid=Api&P=0&w=300&h=300'
                    alt=''
                />
                <div className='login_text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>Sign in With Google</Button>
            </div>
            
        </div>
    )
}

export default Login
