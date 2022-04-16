import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { pxToRem } from '../../../../utils/pxToRem'
import logo from '../../../../assets/images/RE1Mu3b.png'
import { Container } from './style'
import axios from '../../../../utils/axios'
import { LogInContext } from '../../../../context/LogInContext'
import Swal from 'sweetalert2'
import { signInWithEmailAndPassword, getAuth, updateCurrentUser } from "firebase/auth"
import { initializeApp } from "firebase/app"
import AuthContextProvider from '../../../../context/authContext'
const firebaseConfig = {
    apiKey: "AIzaSyDJxs-B5MkfTvuYU1m94b28ibevrMA57DE",
    authDomain: "todo-1416b.firebaseapp.com",
    projectId: "todo-1416b",
    storageBucket: "todo-1416b.appspot.com",
    messagingSenderId: "207546512803",
    appId: "1:207546512803:web:ecf6d52fff5895d3551616"
};
function SignIn({ updateAuth }) {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        identifier: "",
        password: ""
    })
    const [cred, setCred] = useState(null);

    const navigate = useNavigate();
    const handleInput = ({ target }) => {
        const { name, value } = target
        setUser(prevState => ({ ...prevState, [name]: value }));
    }
    const handleSignIn = async () => {

        signInWithEmailAndPassword(auth, user.identifier, user.password)
            .then((cred) => {
                console.log(auth)
                console.log(cred)
                setCred(cred.user);
                updateAuth(cred.user)
                localStorage.setItem("user", cred.user.uid)
                localStorage.setItem("token", cred.user.accessToken)
                setIsLoggedIn(true);
                setLoading(true)
            })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Successful log in!",
                    text: "Enjoy your time!!!",
                    timer: 2000
                })
            }).then((value) => {
                setLoading(false);
                // const userData = {
                //     token: data.jwt,
                //     user: data.user
                // }

                updateCurrentUser(auth, cred)
                navigate('/myDay')
            })

            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response.data.error.message,

                })
            })
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
