import React, { useContext, useEffect, lazy, Suspense } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import MyDay from '../components/myday'
import Searchbar from "../components/Searchbar"

const SignIn = lazy(() => import('../components/authentication/Main/SignIn/SignIn'))
const SignUp = lazy(() => import('../components/authentication/Main/SignUp/SignUp'))
const LandingPage = lazy(() => import('../components/authentication/Main/LandingPage/LandingPage'));

import { sidebarObj } from '../utils/sidebar'
import { Route, Routes } from "react-router-dom"
import { Wrapper } from './style'

//CONTEXT
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
import ReducerContextProvider from '../context/reducerContext'
import { LogInContext } from '../context/LogInContext'
import DrawerContextProvider from '../context/DrawerContext'


const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
    useEffect(() => {
        setIsLoggedIn(false);
    }, [])
    if (isLoggedIn) {
        return (
            <>
                <Navbar />
                <Wrapper>
                    <DrawerContextProvider>
                        <ReducerContextProvider>
                            <TaskContext>
                                <MenuHideContext>
                                    <Sidebar />
                                    <Routes>
                                        {sidebarObj.map(({ id, path: pathname, Component }) => (
                                            <Route key={id} path={pathname} element={<Component />} />
                                        ))}
                                        <Route path="searchbar" element={<Searchbar />} />
                                        <Route path='*' element={<MyDay />} />
                                    </Routes>
                                </MenuHideContext>
                            </TaskContext>
                        </ReducerContextProvider>
                    </DrawerContextProvider>
                </Wrapper>
            </>
        )
    } else {
        return (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/sign-in' element={<SignIn />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='*' element={<LandingPage />} />
                    </Routes>
                </Suspense>


            </>
        )
    }


}


export default Root
