import React, { useState, useEffect } from 'react'
import Navbar from './nav';
import { Container } from './style';
import axios from '../../utils/axios';

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
                <Navbar todos={todos} />
            </div>
        </Container>
    )
}

export default MyDay;
