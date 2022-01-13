import React, { useContext, useState } from 'react'
import { AddMenu, Container, UnderLine } from './style'
import { nanoid } from 'nanoid';

//ICONS
import { BsThreeDots, BsCircle, BsArrowRepeat } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5"
import { VscArrowSwap, VscBell } from "react-icons/vsc"
import { GoLightBulb } from "react-icons/go"
import { AiOutlinePlus } from "react-icons/ai"
import { IoCalendarOutline } from "react-icons/io5"

//CONTEXT
import { MenuContext } from '../../../context/menubarContext';
import Tasks from '../Tasks';
import { ReducerContext } from '../../../context/reducerContext';
import Drawer from '../drawer/Drawer';



const Navbar = () => {
    const [hide, setHide] = useContext(MenuContext);
    const [active, setActive] = useState(false)
    // const [data, setData] = useContext(MyTaskContext);
    const [data, setData] = useState("");


    const [todos, dispatch] = useContext(ReducerContext);

    const handleChange = (e) => {
        setData(e.target.value);
    }


    const Add = () => {
        dispatch({ type: "MyDayAdd", payload: { text: data, category: "My Day" } })
        setData("")
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
                                    <label htmlFor='date' >
                                        <IoCalendarOutline className='icon' style={{ marginRight: "5px" }} />
                                    </label>
                                    <input type="date" className='date' name='date' id="date" />
                                    <VscBell className='icon' style={{ marginRight: "5px" }} />
                                    <BsArrowRepeat className='icon' style={{ marginRight: "5px" }} />
                                </div>
                                <p className='add' onClick={Add}>Add</p>
                            </div>
                        }
                    </AddMenu>

                </Container >
                {todos.map((value) => (
                    <Tasks value={value} dispatch={dispatch} key={nanoid(4)} />
                ))}
                <UnderLine />
            </div>
            <Drawer />
        </div>

    )
}

export default Navbar
