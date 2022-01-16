import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { pxToRem } from '../../../../utils/pxToRem'
import logo from '../../../../assets/images/RE1Mu3b.png'
import { Container } from './style'
// import {useHistory} from 'react-router-dom'

function SignIn() {
    // let history =useHistory();
    const navigate = useNavigate();

    return (
        <Container>
            <div className='body'>
                <img src={logo} className='logo' onClick={() => navigate("/")} />
                <p className='singinText'>Sign in</p>
                <input type="email" placeholder="Email" className='input' />
                <input type="password" placeholder="Password" className='input' />
                <p style={{ fontSize: `${pxToRem(14)}`, marginTop: `${pxToRem(15)}` }}>No  account? <Link to="/sign-up" className='link'>Create one!</Link></p>
                <p style={{ marginTop: `${pxToRem(13)}`, marginBottom: `${pxToRem(30)}` }} className='link'>Can't access your account?   </p>
                <div className='buttons'>
                    <button className='backBtn'>Back</button>
                    <button className='nextBtn'>Sign in</button>
                </div>

            </div>
        </Container>
    )
}
export default SignIn
