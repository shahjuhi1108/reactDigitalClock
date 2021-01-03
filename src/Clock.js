import React, { useLayoutEffect, useState } from 'react'
import './Clock.css'

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useLayoutEffect(() => {
        setInterval(() =>
        setTime(new Date().toLocaleTimeString()),
        1000
        );
    })

    return (
        <div className='Time'>
            <p>{time}</p>
        </div>
    )
}

export default Clock;