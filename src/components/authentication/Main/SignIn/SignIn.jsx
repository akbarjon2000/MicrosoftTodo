import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { pxToRem } from '../../../../utils/pxToRem'
import logo from '../../../../assets/images/RE1Mu3b.png'
import { Container } from './style'
import axios from '../../../../utils/axios'
import { LogInContext } from '../../../../context/LogInContext'
// import {useHistory} from 'react-router-dom'

function SignIn() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
    console.log(isLoggedIn)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        identifier: "",
        password: ""
    })

    const navigate = useNavigate();
    const handleInput = ({ target }) => {
        const { name, value } = target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSignIn = async () => {
        try {
            const { data } = await axios.post("/auth/local", { identifier: user.identifier, password: user.password });
            console.log(data);
            setLoading(true)
            setIsLoggedIn(true);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <div className='body'>
                <img alt='logo' src={logo} className='logo' onClick={() => navigate("/")} />
                <p className='singinText'>Sign in</p>
                <input name='identifier' type="email" placeholder="Email" className='input' value={user.identifier} onChange={handleInput} />
                <input name='password' type="password" placeholder="Password" className='input' value={user.password} onChange={handleInput} />
                <p style={{ fontSize: `${pxToRem(14)}`, marginTop: `${pxToRem(15)}` }}>No  account? <Link to="/sign-up" className='link'>Create one!</Link></p>
                <p style={{ marginTop: `${pxToRem(13)}`, marginBottom: `${pxToRem(30)}` }} className='link'>Can't access your account?   </p>
                <div className='buttons'>
                    <button className='backBtn'>Back</button>
                    <button className='nextBtn' onClick={handleSignIn}>{loading ? "Logging in..." : "Sign in"}</button>
                </div>

            </div>
        </Container >
    )
}
export default SignIn
