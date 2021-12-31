import React from 'react'
import { Container, Exit, Header, Item, Title, Wrapper } from './style';
import { NavLink } from "react-router-dom"
import { sidebarObj as sidebar } from '../../utils/sidebar';
// import { ReactComponent as Logout } from "../../assets/icon/log-out.svg"
// import { ReactComponent as Bitmap } from "../../assets/icon/Bitmap.svg"
const Sidebar = () => {

    return (
        <Container>
            {sidebar.map(({ id, title, path, icon: Icon }) => (
                <NavLink to={path} key={id} style={({ isActive }) => {
                    return {
                        color: isActive ? 'blue' : '#black',
                        textDecoration: "none",
                        backgroundColor: isActive ? "#dee2e6" : "#e9ecef",
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        height: "46px",
                        width: '100%',
                        padding: "0 20px"
                    }
                }}><Item><Icon /><Title>{title}</Title> </Item>
                </NavLink>
            ))}

        </Container>
    )
}
export default Sidebar;