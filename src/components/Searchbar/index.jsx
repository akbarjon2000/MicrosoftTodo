import React, { useState, useEffect } from 'react'
import { Container } from './style';
import axios from '../../utils/axios';
import Drawer from './drawer/Drawer';
import Tasks from "./Tasks";
import { nanoid } from 'nanoid';
const MyDay = () => {
    const [todos, setTodos] = useState([]);
    const fetchTodo = async () => {
        try {
            const { data } = await axios.get("/todos");
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
                {todos.map(({ id, attributes }) => (
                    <Tasks value={{ id, ...attributes }} key={nanoid(4)} fetchTodo={fetchTodo} />
                ))}
                <div className='underlines'></div>
            </div>
            <Drawer todos={todos} fetchTodo={fetchTodo} />
        </Container>
    )
}

export default MyDay;
