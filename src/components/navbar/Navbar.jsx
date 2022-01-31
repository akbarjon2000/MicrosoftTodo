import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Nav } from './style'
import { CgMenuGridO } from "react-icons/cg"
import { VscSettingsGear, VscSearch } from "react-icons/vsc"
import { BiQuestionMark } from "react-icons/bi"
import { AiOutlineNotification, AiOutlineUser } from "react-icons/ai"
import { SearchContext } from "../../context/SearchContext";
import { Colors } from '../../constants/constants'
import axios from 'axios';
const Navbar = () => {
    // const [searchText, setSearchText] = useState("");
    const [searchText, setSearchText] = useContext(SearchContext);
    const [showInput, setShowInput] = useState(false);
    // const fetchTodo = async () => {
    //     try {
    //         const { data } = await axios.get(`/todos`);
    //         const { data: todo } = data;
    //         console.log(todo)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    const handleTextChange = (e) => {
        setSearchText(e.target.value)
    }
    const navigate = useNavigate();
    const handleShowInput = () => {
        setShowInput(true);
        navigate("/searchbar");
    }
    return (
        <Nav show={showInput}>
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
