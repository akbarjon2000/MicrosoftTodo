import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "../../../../utils/axios"
import Swal from "sweetalert2";
//FUNCTIONS
import { pxToRem } from '../../../../utils/pxToRem';
//IMAGES
import logo from '../../../../assets/images/RE1Mu3b.png';
import { Container } from './style'
// import {useHistory} from 'react-router-dom'

function SignUp() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setUser(prevState => ({ ...prevState, [name]: value }))
        console.log(user);
    }
    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("/auth/local/register", user);
            console.log(data);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "You have successfully registered",
                footer: `<Link>Back to Home page</Link>`
            })
        } catch (error) {
            console.log(error.response.data.error.message);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `${error.response.data.error.message}`,

            })
        }
    }
    const { username, email, password } = user;
    return (
        <Container>
            <div className='body'>
                <img src={logo} className='logo' onClick={() => navigate("/")} />
                <p className='singinText'>Sign in</p>
                <input
                    value={username}
                    onChange={handleInputChange}
                    type="text" placeholder="User name"
                    name='username' className='input'
                />
                <input
                    value={email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    name='email'
                    className='input'

                />
                <input
                    value={password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Password"
                    name='password'
                    className='input'

                />
                <p style={{ fontSize: `${pxToRem(14)}`, marginTop: `${pxToRem(15)}` }}>No  account? <Link to="/sign-up" className='link'>Create one!</Link></p>
                <p style={{ marginTop: `${pxToRem(13)}`, marginBottom: `${pxToRem(30)}` }} className='link'>Can't access your account?   </p>
                <div className='buttons'>
                    <button className='backBtn'><Link style={{ textDecoration: "none" }} to="/sign-in">Back</Link></button>
                    <button className='nextBtn' onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </Container>
    )
}
export default SignUp
