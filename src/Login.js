import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import loginLogo from "./images/loginlogo.png"
import {db, auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => [
                history.push('/')
            ])
            .catch(error => alert(error.message))
        //login with firebase
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //for verification of registration
                console.log(auth)

            if (auth) {
                history.push('/')
            }
            })
            .catch(error => alert(error.message))
        //login with firebase
    }

    return (
        <div className="login">
            <Link to="/">
                <div>
                    <img 
                        className="login__logo" 
                        src={loginLogo} 
                    />
                </div>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form className="login__form">
                    <h5>E-mail</h5>
                    <input type="text" 
                        value={email} 
                        onChange={
                        e => setEmail(e.target.value)} 
                    />
                    <h5>Password</h5>
                    <input type="text" 
                        value={password} 
                        onChange = {
                        e => setPassword(e.target.value)
                    } 
                    />
                    <button
                        type="submit"
                        onClick={signIn} 
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                    <p>By signing in you agree to AMAZON CLONE's terms and conditions. Privacy notice, our cookies notice your activity and work for ads. </p>
                    <button 
                        type="submit"
                        onClick={register}
                        className="login__registerButton"
                        >
                            Create your amazon account
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Login 