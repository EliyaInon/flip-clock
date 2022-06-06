import React, { useEffect } from 'react'
import { useState } from 'react'
import Section from './Section'

export default function Clock() {
    const [currTime, setCurrTime] = useState(new Date())

    useEffect(() => {
        let t = setTimeout(() => {
            setCurrTime(new Date())
        }, 1000)

        return () => clearTimeout(t)
    })
    
    return (
        <div>
            <Section sectionName='HOURS' coupleDigitsNumber={currTime.getHours()} />
            <Section sectionName='MINUTES' coupleDigitsNumber={currTime.getMinutes()} />
            <Section sectionName='SECONDS' coupleDigitsNumber={currTime.getSeconds()} />
        </div>
    )
}
