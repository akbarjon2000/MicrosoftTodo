import React from 'react'
import Drawer from './drawer/Drawer';
import Navbar from './nav';
import { Container } from './style';
import Tasks from './Tasks';


const MyDay = () => {
    return (
        <Container>
            <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Navbar />
                <Tasks />
                <div className='underlines'></div>
            </div>
            <Drawer />
        </Container>
    )
}

export default MyDay;
