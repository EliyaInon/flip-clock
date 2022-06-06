import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ModeContext } from '../App'
import Digit from './Digit'
import Styles from './Section.module.css'

interface Props {
    sectionName: string
    coupleDigitsNumber: number
}

export default function Section(props: Props) {
    const ModeContextConsumer = useContext(ModeContext)

    const [coupleDigitsNumber, setCoupleDigitsNumber] = useState<number>(0)

    useEffect(() => {
        if (props.coupleDigitsNumber >= 60 || props.coupleDigitsNumber < 0) {
            setCoupleDigitsNumber(0)
            console.error("not alowed section to be above 59 or below zero")
        } else {
            setCoupleDigitsNumber(props.coupleDigitsNumber)
        }
    }, [props.coupleDigitsNumber])

    return (
        <div className={Styles.section}>
            <div className={`${Styles.title} ${ModeContextConsumer.mode === "light" ? Styles.light : Styles.dark}`}>
                {props.sectionName}
            </div>
            <div className={Styles.digits}>
                <Digit digitNumber={Math.floor(coupleDigitsNumber / 10)} />
                <Digit digitNumber={coupleDigitsNumber % 10} />
            </div>
        </div>
    )
}
