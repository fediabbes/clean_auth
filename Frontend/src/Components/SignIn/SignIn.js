import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clear_errors, sign_in } from '../../redux/Actions/AuthActions'
import './SignIn.css'

function SignIn() {
    const errors = useSelector(state => state.AuthReducer.errors)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // useEffect(() => {
    //     errors && errors.map(el => alert(el.message))
    //     dispatch(clear_errors())
    // }, [])

    return (
        <div>
            <p className="texto">Sign In</p>
            <h2 className="SigninBtn">Sign Up</h2>
            <div className="Registro">
                <form method="post" action="https://getform.org/f/70415a77-d632-4883-bf07-2e15d3f557da">
                    <span className="fontawesome-user" />
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" required placeholder="Email" autoComplete="off" />
                    <span className="fontawesome-lock" />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" required placeholder="password" autoComplete="off" />
                    <Button onClick={() => dispatch(sign_in({ email, password }, navigate))} variant='info'> Loggin in </Button>
                    {/* <input type="submit" defaultValue="Sign" title="Registra tu cuenta" /> */}
                </form></div>
        </div>

    )
}

export default SignIn