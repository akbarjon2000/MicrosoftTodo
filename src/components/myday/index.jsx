import React from 'react'
import Drawer from './drawer/Drawer';
import Navbar from './nav';
import { Container } from './style';


const MyDay = () => {
    return (
        <Container>
            <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Navbar />

                <div className='underlines'></div>
            </div>
            <Drawer />
        </Container>
    )
}

export default MyDay;
