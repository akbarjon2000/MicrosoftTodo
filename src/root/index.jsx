import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarObj } from '../utils/sidebar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Wrapper } from './style'
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
const Root = () => {
    return (
        <div>
            <Navbar />
            <Router>
                <Wrapper>
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
                </Wrapper>
            </Router>
        </div>
    )
}

export default Root
