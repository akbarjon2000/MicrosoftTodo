import React, { useContext, useEffect, lazy, Suspense, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import MyDay from '../components/myday'
import Searchbar from "../components/Searchbar"
import { Provider } from 'react-redux';
import { sidebarObj } from '../utils/sidebar'
import { Route, Routes, useNavigate } from "react-router-dom"
import { Wrapper } from './style'

//CONTEXT
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
import ReducerContextProvider from '../context/reducerContext'
import { LogInContext } from '../context/LogInContext'
import DrawerContextProvider from '../context/DrawerContext'
import SearchContextProvider from '../context/SearchContext'
import UserIdContext from '../context/UserIdContext'
import AuthContextProvider from '../context/authContext'
import store from '../store';
//REACT LAZY
const SignIn = lazy(() => import('../components/authentication/Main/SignIn/SignIn'))
const SignUp = lazy(() => import('../components/authentication/Main/SignUp/SignUp'))
const LandingPage = lazy(() => import('../components/authentication/Main/LandingPage/LandingPage'));

const Root = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(LogInContext);
    const [auth, setAuth] = useState(() => ({
        user: localStorage.user || "{}",
        token: localStorage.token
    }));
    const { token, user } = auth;
    const signOut = () => {
        try {
            setAuth({});
            setIsLoggedIn(false);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setIsLoggedIn(false);
    }, [])

    if ((token && user?.id) || isLoggedIn) {
        return (
            <>
                <Provider store={store}>
                    <AuthContextProvider>
                        <UserIdContext>
                            <SearchContextProvider>
                                <MenuHideContext>
                                    <Navbar signOut={signOut} />
                                    <Wrapper>
                                        <DrawerContextProvider>
                                            <ReducerContextProvider>
                                                <TaskContext>
                                                    <Sidebar />
                                                    <Routes>
                                                        {sidebarObj.map(({ id, path: pathname, Component }) => (
                                                            <Route key={id} path={pathname} element={<Component />} />
                                                        ))}
                                                        <Route path="searchbar" element={<Searchbar />} />
                                                        <Route path='*' element={<MyDay />} />
                                                    </Routes>
                                                </TaskContext>
                                            </ReducerContextProvider>
                                        </DrawerContextProvider>
                                    </Wrapper>
                                </MenuHideContext>
                            </SearchContextProvider>
                        </UserIdContext>
                    </AuthContextProvider>
                </Provider>
            </>
        )
    } else {
        return (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/sign-in' element={<SignIn updateAuth={setAuth} />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='*' element={<LandingPage />} />
                    </Routes>
                </Suspense>


            </>
        )
    }


}


export default Root
