import React from 'react'
import { AddStep, Container, Steps } from './style'
import { TiTick } from "react-icons/ti"
import { BiStar } from "react-icons/bi"
const Drawer = () => {
    return (
        <Container>
            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    <div className='circle center'><TiTick color='#6e8eeb' /></div>
                    <input value="Hello world!" className="input" />
                    <BiStar className='icon' />
                </div>
            </AddStep>
            <Steps>
                <div className='circle center'><TiTick color='#6e8eeb' /></div>
                <input className="input" />
            </Steps>
        </Container>
    )
}

export default Drawer
