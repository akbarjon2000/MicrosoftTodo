import React from 'react'
import { pxToRem } from '../../../../utils/pxToRem'
import { Colors } from '../../../../constants/constants'
import logo from '../../../../assets/images/RE1Mu3b.png'
import { Container } from './style'
// import {useHistory} from 'react-router-dom'

function Login() {
    // let history =useHistory();


    return (
        <Container>
            <div className='body'>
                <img src={logo} className='logo' />
                <p className='singinText'>Sign in</p>
                <input type="email" placeholder="Email" className='input' />
                <p style={{ fontSize: `${pxToRem(14)}`, marginTop: `${pxToRem(15)}` }}>No  account? <span className='link'>Create one!</span></p>
                <p style={{ marginTop: `${pxToRem(13)}` }} className='link'>Can't access your account?   </p>
                <div className='buttons'>
                    <button className='backBtn'>Back</button>
                    <button className='nextBtn'>Next</button>
                </div>
            </div>
        </Container>
    )
}

export default Login
