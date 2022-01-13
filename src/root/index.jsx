import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarObj } from '../utils/sidebar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Wrapper } from './style'
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
import ReducerContextProvider from '../context/reducerContext';
const Root = () => {
    return (
        <div>
            <Navbar />
            <Router>
                <Wrapper>
                    <ReducerContextProvider>
                        <TaskContext>
                            <MenuHideContext>
                                <Sidebar />
                                <Routes>
                                    {sidebarObj.map(({ id, path: pathname, Component }) => (
                                        <Route key={id} path={pathname} element={<Component />} />
                                    ))}
                                    <Route path='*' element={<h1>Page not found</h1>} />
                                </Routes>
                            </MenuHideContext>
                        </TaskContext>
                    </ReducerContextProvider>
                </Wrapper>
            </Router>
        </div>
    )
}

export default Root
