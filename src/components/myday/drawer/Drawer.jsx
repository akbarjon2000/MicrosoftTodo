import React, { useState } from 'react'
import { AddMyDay, AddStep, Container, Steps, Remind } from './style'
import { TiTick } from "react-icons/ti"
import { BiStar } from "react-icons/bi"
import { BsSun } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { Colors } from '../../../constants/constants'
import { VscBell } from "react-icons/vsc"


const Drawer = () => {
    const [text, setText] = useState('Hello WOrld')
    const [active, setActive] = useState(false)
    const [myday, setMyDay] = useState(false)

    return (
        <Container>

            <AddStep>
                <div className='align__center' style={{ height: "100%", justifyContent: "space-between" }}>
                    <div className='circle center'><TiTick color='#6e8eeb' /></div>
                    <input value={text} onChange={(e) => setText(e.target.value)} className="input" />
                    <BiStar className='icon' />
                </div>
            </AddStep>
            <Steps active={active}>
                <div className='innerDiv'>
                    <div className='circle center'></div>
                    <input placeholder='Add step' className="input" onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
                    <p className='add'>Add</p>
                </div>
            </Steps>
            <AddMyDay myDay={myday}>
                <div className='align__center' onClick={() => setMyDay(true)} style={{ width: "100%" }}>
                    <BsSun className='icon' style={{ color: `${myday ? Colors.blue : ""}` }} />
                    <p style={{ marginLeft: "20px" }}>{myday ? "Added to My Day" : "Add to My Day"}</p>
                </div>
                <IoMdClose style={{ display: `${myday ? "" : "none"}` }} className='icon' onClick={() => setMyDay(false)} />
            </AddMyDay>
            <div style={{ border: "1px solid rgb(230, 230, 230)", width: "95%" }}>
                <Remind style={{ justifyContent: "space-between" }}>
                    <div className="align__center" >
                        <span className='iconContainer center'> <VscBell className='icon' /></span>
                        <div style={{ display: "flex", flexDirection: "column", }} className='text'>
                            <p>Remind me</p>
                            <p>Fri, February 11</p>
                        </div>
                    </div>
                    <IoMdClose className='close' />
                </Remind>
            </div>
        </Container>
    )
}

export default Drawer
