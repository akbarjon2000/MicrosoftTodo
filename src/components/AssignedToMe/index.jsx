import React, { useContext } from 'react';
import { Container } from './Style';
import { MenuContext } from '../../context/menubarContext';
import { IoMenuOutline } from "react-icons/io5"
import { BsThreeDots } from "react-icons/bs";
import { ReactComponent as AssignIcon } from "../../assets/icons/assignedToMe.svg"
const Index = () => {
    const [hide, setHide] = useContext(MenuContext);
    return <Container hide={hide}>
        <div className='align__center' >
            <button className='menuIcon ' onClick={() => setHide(false)}>
                <IoMenuOutline size={20} className='icon' style={{}} />
            </button>
            <h3>Assigned to me</h3>
            <div className='dotsCon center' title='list opntions'>
                <BsThreeDots className='icon' />
            </div>
        </div>
        <div style={{ height: "100%", flexDirection: "column" }} className="center">
            <AssignIcon className="assignIcon" style={{ margin: "0 auto" }} />
            <span className='text'>Tasks assigned to you in To Do or Planner show up here</span>
        </div>
    </Container>
}

export default Index;
