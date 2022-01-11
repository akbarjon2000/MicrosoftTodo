import React, { useContext, useState, useEffect } from 'react'
import { AddMenu, Container } from './style'
//ICONS
import { BsThreeDots, BsCircle, BsArrowRepeat } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5"
import { VscBell } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { IoCalendarOutline } from "react-icons/io5"

//CONTEXT
import { MenuContext } from '../../../context/menubarContext';
import { MyTaskContext } from '../../../context/tasksContext';
import { nanoid } from 'nanoid';


const Navbar = () => {
    const [hide, setHide] = useContext(MenuContext);
    const [active, setActive] = useState(false)
    const [data, setData] = useContext(MyTaskContext);

    const handleChange = (e) => {
        setData({
            text: `${e.target.value}`
        })
    }

    useEffect(() => {
        localStorage.setItem("localData", JSON.stringify(data));
        console.log(localStorage)
    }, [data])
    console.log(localStorage)
    var localData = [];
    var newData = {
        id: nanoid(3),
        text: data.text,
        reminder: data.reminder,
        repeat: data.repeat,
        add: data.add
    }
    var newToDo = JSON.parse(localStorage.localData || "[]");
    const Add = () => {
        setData({ add: true });
        if (newToDo?.length === 0) {
            localData.push(newData);
        } else {
            localData = [...newToDo, newData];
        }
        localStorage.setItem("localData", JSON.stringify(localData));
    }

    return (
        <Container hide={hide}>

            <div className='header' style={{ display: "flex", justifyContent: "flex-start" }}>
                <div >
                    <button className='menuIcon' onClick={() => setHide(false)}>
                        <IoMenuOutline size={20} className='icon' />
                    </button>
                </div>

                <div className=' nav align__center' >
                    <h3>Important</h3>
                    <div className='dotsCon center' title='list opntions'>
                        <BsThreeDots className='icon' />
                    </div>
                </div>

            </div>



            <AddMenu active={active} >
                <div className='align__center' onClick={() => setActive(true)}>

                    {active ?
                        <BsCircle className='icon' ></BsCircle>
                        : <AiOutlinePlus className='icon' style={{ cursor: "pointer", color: "#6e8eeb" }} />
                    }
                    <input type="text" placeholder='Add a task' className='input' value={data.text} onChange={(e) => handleChange(e)} />
                </div>
                {active &&
                    <div className='align__center alarm'>
                        <div>
                            <IoCalendarOutline className='icon' style={{ marginRight: "5px" }} />
                            <VscBell className='icon' style={{ marginRight: "5px" }} />
                            <BsArrowRepeat className='icon' style={{ marginRight: "5px" }} />
                        </div>
                        <p className='add' onClick={() => Add}>Add</p>
                    </div>
                }
            </AddMenu>

        </Container >

    )
}

export default Navbar
