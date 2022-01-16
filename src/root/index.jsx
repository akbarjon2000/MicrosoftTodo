import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarObj } from '../utils/sidebar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Wrapper } from './style'
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
import ReducerContextProvider from '../context/reducerContext'
import Main from '../components/authentication/Main/Main'
import Login from '../components/authentication/Main/Login/Login'
const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        id: null,
        username: "",
        email: ""
    })
    return (
        <div>
            <Router>
                {isLoggedIn ?
                    <>
                        <Navbar />
                        <Wrapper>
                            <ReducerContextProvider>
                                <TaskContext>
                                    <MenuHideContext>
                                        <Main />
                                        {/* <Sidebar />
                                <Routes>
                                    {sidebarObj.map(({ id, path: pathname, Component }) => (
                                        <Route key={id} path={pathname} element={<Component />} />
                                    ))}
                                    <Route path='*' element={<Main />} />
                                </Routes> */}
                                    </MenuHideContext>
                                </TaskContext>
                            </ReducerContextProvider>
                        </Wrapper>
                    </>
                    : <Main />
                }
            </Router>
        </div>
    )
}

export default Root
