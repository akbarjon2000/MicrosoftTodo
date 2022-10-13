import React, { useState, createContext } from 'react'

export const MyTaskContext = createContext();

const TasksContext = ({ children }) => {
    const [task, setTask] = useState({
        // title: "",
        // reminder: "",
        // repeat: "",
        // due_date: "",
        // category: "",
        // is_completed: false,
        // is_important: false,
        // user: "",
        // ownerID: 1,
        // id: "",
        // content: ""
    });

    return (
        <MyTaskContext.Provider value={[task, setTask]}>
            {children}
        </MyTaskContext.Provider>
    )
}

export default TasksContext
