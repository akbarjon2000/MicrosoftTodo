import React, { useState, useEffect, useContext } from 'react'
import Navbar from './nav';
import { Container } from './style';
import axios from '../../utils/axios';
import Drawer from './drawer/Drawer';
import { UserIdContext } from "../../context/UserIdContext";
const Important = () => {
    const [todos, setTodos] = useState([]);
    const userId = useContext(UserIdContext);
    const fetchTodo = async () => {
        try {
            const { data } = await axios.get(`/todos?filters[important][$eq]=true&filters[userId]=${userId}`);
            const { data: todo } = data;
            setTodos(todo)
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

export default Important;
