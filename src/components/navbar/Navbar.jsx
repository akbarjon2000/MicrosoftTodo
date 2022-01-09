import React from 'react'
import { Nav } from './style'
import { CgMenuGridO } from "react-icons/cg"
import { VscSettingsGear } from "react-icons/vsc"
import { BiQuestionMark } from "react-icons/bi"
import { AiOutlineNotification, AiOutlineUser } from "react-icons/ai"
const Navbar = () => {
    return (
        <Nav>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ color: "#fff", marginLeft: "10px", backgroundColor: "transparent", border: "none", outline: "none" }}><CgMenuGridO style={{ color: "#fff" }} size={24} title='grid' /></button>
                <h3 style={{ color: "white", marginLeft: "15px", fontWeight: "500" }}>To Do</h3>
            </div>
            <div>
                <input type="search" />
            </div>
            <div style={{ heigth: "100%" }}>
                <button className='iconbtn'><VscSettingsGear size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn'><BiQuestionMark size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn'><span>{0}</span><AiOutlineNotification size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn'><AiOutlineUser size={24} color='#fff' className='icons' /></button>
            </div>
        </Nav>
    )
}

export default Navbar
