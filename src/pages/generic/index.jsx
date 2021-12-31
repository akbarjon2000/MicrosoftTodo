import React, { } from 'react'
import { useLocation } from "react-router-dom"
const Generic = () => {

    const location = useLocation();

    return (
        <div>
            <h1>{location.pathname} Coming Soon</h1>
        </div>
    )
}

export default Generic
