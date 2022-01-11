import React, { useState, createContext } from 'react'

export const MyTaskContext = createContext();

const TasksContext = ({ children }) => {
    const [data, setData] = useState({
        text: "",
        date: "",
        reminder: "",
        repeat: "",
        add: false
    });

    return (
        <MyTaskContext.Provider value={[data, setData]}>
            {children}
        </MyTaskContext.Provider>
    )
}

export default TasksContext
