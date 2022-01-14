import React from 'react'
import Navbar from './nav';
import { Container } from './style';


const MyDay = () => {
    return (
        <Container>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
                <Navbar />

                {/* <div className='underlines'></div> */}
            </div>
            {/* <Drawer /> */}
        </Container>
    )
}

export default MyDay;
