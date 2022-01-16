import React, { useState } from 'react'
import Login from './Login/Login';
//ICONS
import { Link } from 'react-router-dom';
import boy from '../../../assets/images/boy.png'
import girl from '../../../assets/images/girl.png'
import logo from '../../../assets/images/logo.png'
import both from '../../../assets/images/both.png'
import { BsApple } from 'react-icons/bs'
import { AiFillAndroid } from 'react-icons/ai'
import { AiFillWindows } from 'react-icons/ai'
import { Container } from './style';

const Main = () => {
    const [login, setLogin] = useState(false);

    return (
        <>

            {login ? <Login />
                : <Container >
                    <div className="left__side">
                        <img src={boy} alt="boy" />
                    </div>


                    <div className="middle__side">
                        <div className="middle__side--img">
                            <img src={logo} alt="logo" style={{ width: '100px' }} />
                        </div>
                        <p className="middle__side--title">
                            Microsoft To Do
                        </p>
                        <div className="middle__side--img2">
                            <img src={both} alt="both" />
                        </div>
                        <p className="middle__side--subtitle">
                            To Do gives you focus, from work to play.
                        </p>
                        <Link to="/login">
                            <button onClick={() => setLogin(true)} className='middle__side--button'>Get started</button>
                        </Link>
                        <a className='learnMore' href='https://www.microsoft.com/ko-kr/microsoft-365/microsoft-to-do-list-app?rtc=1'>Learn more</a>
                        <h3 className='download'>Download To Do</h3>
                        <div className="middle__side--icons">
                            <div className="android">
                                <AiFillAndroid />
                            </div>
                            <div className="windows">
                                <AiFillWindows />
                            </div>
                            <div className="apple">
                                <BsApple />
                            </div>
                        </div>
                        <a href='https://www.microsoft.com/en-us/servicesagreement' className='readme'>Terms of use for To Do</a>
                    </div>


                    <div className="right__side">
                        <img src={girl} alt="girl" />
                    </div>

                </Container>
            }
        </>
    )
}

export default Main
