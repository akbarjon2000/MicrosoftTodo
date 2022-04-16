import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "../../../../utils/axios"
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth"
//CONTEXT:
import { AuthContext } from '../../../../context/authContext';
import { LogInContext } from '../../../../context/LogInContext';
//IMAGES
import logo from '../../../../assets/images/RE1Mu3b.png';
import { Container } from './style'

import { initializeApp, } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJxs-B5MkfTvuYU1m94b28ibevrMA57DE",
    authDomain: "todo-1416b.firebaseapp.com",
    projectId: "todo-1416b",
    storageBucket: "todo-1416b.appspot.com",
    messagingSenderId: "207546512803",
    appId: "1:207546512803:web:ecf6d52fff5895d3551616"
};
function SignUp() {
    initializeApp(firebaseConfig);
    const auth = getAuth()
    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
    // const [auth] = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setUser(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async () => {
        try {
            setLoading(true);
            console.log(auth)
            createUserWithEmailAndPassword(auth, user?.email, user?.password)
                .then((cred) => {
                    console.log(cred)
                    localStorage.setItem("user", cred.user.uid)
                    localStorage.setItem("token", cred.user.accessToken);
                    navigate('/myday')
                })
            setLoading(false);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "You have successfully registered",
            })
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error.response.data.error.message);
            setLoading(false);
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
                <img alt='logo2' src={logo} className='logo' onClick={() => navigate("/")} />
                <p className='singinText'>Sign up</p>
                <input
                    value={username}
                    onChange={handleInputChange}
                    type="text" placeholder="User name"
                    name='username' className='input'
                    required
                />
                <input
                    value={email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    name='email'
                    className='input'
                    required

                />
                <input
                    value={password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Password"
                    name='password'
                    className='input'
                    required

                />
                <div className='buttons'>
                    <button className='backBtn'><Link style={{ textDecoration: "none" }} to="/sign-in">Back</Link></button>
                    <Link to={isLoggedIn ? "myDay" : "sign-up"}>
                        <button className='nextBtn' onClick={handleSubmit} disabled={loading}>{loading ? "Creating..." : "Sign Up"}</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
export default SignUp
