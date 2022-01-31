import React, { useState, useEffect } from 'react'
import Navbar from './nav';
import { Container } from './style';
import axios from '../../utils/axios';
import Drawer from './drawer/Drawer';

const Planned = () => {
    const [todos, setTodos] = useState([]);
    const fetchTodo = async () => {
        try {
            const { data } = await axios.get("/todos?filters[date][$eq]=Today");
            const { data: todo } = data;
            setTodos(todo)
            console.log(todo)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchTodo();
    }, [])
    return (
        <Container>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
                <Navbar todos={todos} fetchTodo={fetchTodo} />
                <div className='underlines'></div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default Planned;
