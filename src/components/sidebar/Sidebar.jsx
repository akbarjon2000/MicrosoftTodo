import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
//FILES
import { Container, Item, Title, } from './style';
import { sidebarObj as sidebar } from '../../utils/sidebar';
//ICONS
import { IoMenuOutline } from "react-icons/io5"
//CONTEXT:
import { MenuContext } from '../../context/menubarContext';



const Sidebar = () => {
    const [hide, setHide] = useContext(MenuContext);
    return (
        <Container hide={hide}>
            <button className='menuIcon' onClick={() => setHide(true)}>
                <IoMenuOutline size={20} className='icon' />
            </button>
            {sidebar.map(({ id, title, path, icon: Icon }) => (
                <NavLink to={path} key={id} style={({ isActive }) => {
                    return {
                        color: isActive ? 'blue' : '#black',
                        textDecoration: "none",
                        backgroundColor: isActive ? "rgba(235,235,235,1)" : "#f5f3f4",
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        height: "46px",
                        width: '100%',
                        padding: "0 20px"
                    }
                }}><Item><Icon className="icon" size={20} /><Title>{title}</Title> </Item>
                </NavLink>
            ))}

        </Container>
    )
}
export default Sidebar;