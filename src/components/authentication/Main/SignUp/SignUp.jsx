import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "../../../../utils/axios"
import Swal from "sweetalert2";
import { LogInContext } from '../../../../context/LogInContext';

//IMAGES
import logo from '../../../../assets/images/RE1Mu3b.png';
import { Container } from './style'

function SignUp() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
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
            const { data } = await axios.post("/auth/local/register", user);
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
