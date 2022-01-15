import React, { useContext, useState } from 'react'
import { AddMenu, Container, Modal, UnderLine } from './style'
import { nanoid } from 'nanoid';
import { pxToRem } from '../../../utils/pxToRem';
import { Colors } from '../../../constants/constants';
// import axios from "../../../utils/axios";
//ICONS
import { BsThreeDots, BsCircle, BsArrowRepeat, BsCalendar2Date } from "react-icons/bs";
import { IoMenuOutline, IoTodayOutline, IoCalendarOutline, IoCalendarClearOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import { VscArrowSwap, VscBell } from "react-icons/vsc"
import { GoLightBulb } from "react-icons/go"
import { AiOutlinePlus } from "react-icons/ai"


//CONTEXT
import { MenuContext } from '../../../context/menubarContext';
import Tasks from '../Tasks';
// import { ReducerContext } from '../../../context/reducerContext';
import Drawer from '../drawer/Drawer';



const Navbar = ({ todos }) => {
    const [hide, setHide] = useContext(MenuContext);
    const [active, setActive] = useState(false)
    // const [data, setData] = useContext(MyTaskContext);
    const [data, setData] = useState("");
    const [modals, setModals] = useState({
        modal1: false,
        modal2: false,
        modal3: false
    })
    const [date, setDate] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    }
    console.log(date)
    const Add = () => {
        // dispatch({ type: "MyDayAdd", payload: { text: data, category: "My Day", date: date } });
        // setData("")
    }


    return (
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "100%" }}>

                <Container hide={hide}>
                    {/* <audio controls>
                    <source src='' type='audio/mpeg' />
                </audio> */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <div className='header' style={{ display: "flex", justifyContent: "flex-start" }}>
                            <div >
                                <button className='menuIcon ' onClick={() => setHide(false)}>
                                    <IoMenuOutline size={20} className='icon' style={{ position: `${hide ? "relative" : ""}`, top: `${hide ? "-0.5rem" : ""}` }} />
                                </button>
                            </div>
                            <div>
                                <div className=' nav align__center' >
                                    <h3>My Day</h3>
                                    <div className='dotsCon center' title='list opntions'>
                                        <BsThreeDots className='icon' />
                                    </div>
                                </div>
                                <p>{(new Date()).toDateString().slice(0, -5)}</p>
                            </div>
                        </div>

                        <div style={{ display: "flex" }} className='align__center' title='Sort'>
                            <span className='arrows center'><VscArrowSwap style={{ transform: "rotate(90deg)" }} className='icon' /> Sort</span>
                            <span className='suggestions center'><GoLightBulb className='icon' /> Suggestions</span>
                        </div>
                    </div>
                    <AddMenu active={active} >
                        <div className='align__center' onClick={() => setActive(true)}>

                            {active ?
                                <BsCircle className='icon' ></BsCircle>
                                : <AiOutlinePlus className='icon' style={{ cursor: "pointer" }} />
                            }
                            <input type="text" placeholder='Add a task' className='input' value={data} onChange={(e) => handleChange(e)} />
                        </div>
                        {active &&
                            <div className='align__center alarm'>
                                <div>
                                    <IoCalendarOutline onClick={() => setModals({ modal1: !modals.modal1, modal2: false, modal3: false })} className='icon' style={{ marginRight: "5px" }} />
                                    <Modal modal1={modals.modal1} className='modal' onClick={() => setModals({ modal1: false })} >
                                        <p className='center title'>Due</p>
                                        <div className='align__center dateInfo' onClick={() => setDate("today")} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Today</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setDate("tomorrow")} style={{ color: `${Colors.greyTextColor}` }} >
                                            <div className='align__center'><IoCalendarClearOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Tomorrow</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' onClick={() => setDate("next week")} style={{ color: `${Colors.greyTextColor}`, borderBottom: "1px solid rgba(200, 200, 200)" }} >
                                            <div className='align__center'><IoTodayOutline className='icon' /> <p style={{ marginLeft: "10px" }}>Next week</p></div>
                                            <span >{(new Date()).toDateString().slice(0, 3)}</span>
                                        </div>
                                        <div className='align__center dateInfo' style={{ color: `${Colors.greyTextColor}`, height: `${pxToRem(60)}` }} >
                                            <div className='align__center'><BsCalendar2Date className='icon' /> <p style={{ marginLeft: "10px" }}>Pick a date</p></div>
                                            <span ><IoIosArrowForward /></span>
                                        </div>
                                    </Modal>
                                    <VscBell className='icon' style={{ marginRight: "5px" }} />
                                    <BsArrowRepeat className='icon' style={{ marginRight: "5px" }} />
                                </div>
                                <p className='add' onClick={Add}>Add</p>
                            </div>
                        }
                    </AddMenu>

                </Container >
                {todos.map(({ id, attributes }) => (
                    <Tasks value={{ id, ...attributes }} key={nanoid(4)} />
                ))}
                <UnderLine />
            </div>
            <Drawer />
        </div>

    )
}

export default Navbar
