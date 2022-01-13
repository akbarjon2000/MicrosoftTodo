import React, { useReducer, createContext } from 'react'
import { nanoid } from 'nanoid';

export const ReducerContext = createContext();


const ReducerContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "MyDayAdd":
                return [...state, {
                    id: nanoid(3),
                    category: action.payload.category,
                    text: action.payload.text,
                    date: "Today",
                    reminder: "Remind",
                    repeat: "",
                    completed: false
                }]
            default: return state;
        }
    }

    const [todos, dispatch] = useReducer(reducer, [])
    return (
        <ReducerContext.Provider value={[todos, dispatch]}>
            {children};
        </ReducerContext.Provider>
    )
}

export default ReducerContextProvider;
