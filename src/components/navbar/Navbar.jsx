import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Nav, SignOutModal } from './style'
import { CgMenuGridO } from "react-icons/cg"
import { VscSettingsGear, VscSearch } from "react-icons/vsc"
import { BiQuestionMark } from "react-icons/bi"
import { AiOutlineNotification, AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai"
import { SearchContext } from "../../context/SearchContext";
import { Colors } from '../../constants/constants'
const Navbar = ({ signOut }) => {

    const [searchText, setSearchText] = useContext(SearchContext);
    const [showInput, setShowInput] = useState(false);
    const [showSignOut, setShowSignOut] = useState(false);

    const handleTextChange = (e) => {
        setSearchText(e.target.value)
    }
    const navigate = useNavigate();
    const handleShowInput = () => {
        setShowInput(true);
        navigate("/searchbar");
    }
    const handleSignOut = () => {
        setShowSignOut(false);
        signOut();
    }
    return (
        <Nav show={showInput}>
            {/* <div style={{ display: "flex", gap: "10px" }}> */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ color: "#fff", marginLeft: "10px", backgroundColor: "transparent", border: "none", outline: "none" }}><CgMenuGridO style={{ color: "#fff" }} size={24} title='grid' /></button>
                <h3 style={{ color: "white", marginLeft: "15px", fontWeight: "500" }}>To Do</h3>
            </div>
            <div className='search align__center' onClick={handleShowInput} onBlur={() => setShowInput(false)} >
                <div className='searchbtn center'>
                    <VscSearch style={{ color: `${Colors.blue}` }} />
                </div>
                <input placeholder='Search' type="search" className='searchInput' value={searchText} onChange={handleTextChange} />
            </div>
            {/* </div> */}
            <div style={{ heigth: "100%" }}>
                <button className='iconbtn'><VscSettingsGear size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn'><BiQuestionMark size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn'><AiOutlineNotification size={24} color='#fff' className='icons' /></button>
                <button className='iconbtn' onClick={() => setShowSignOut(!showSignOut)}><AiOutlineUser size={24} color='#fff' className='icons' /></button>
                <SignOutModal showSignOut={showSignOut} onClick={handleSignOut}>
                    <AiOutlinePoweroff style={{ color: "red" }} />
                    <p>Sign out</p>
                </SignOutModal>
            </div>
        </Nav>
    )
}

export default Navbar
