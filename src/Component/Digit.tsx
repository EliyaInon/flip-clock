import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { ModeContext } from '../App'
import Styles from './Digit.module.css'

interface Props {
    digitNumber: number
}
export default function Digit(props: Props) {
    //#region context
    const ModeContextConsumer = useContext(ModeContext)
    //#endregion
    //#region states
    const [digitNumber, setDigitNumber] = useState<number>(props.digitNumber)
    const [prevNumber, setPrevNumber] = useState<number>(props.digitNumber)
    //#endregion
    //#region effects
    // Update the digit number
    useEffect(() => {
        if (props.digitNumber >= 10 || props.digitNumber < 0) {
            const defaultChar: number = 0
            setDigitNumber(defaultChar)
            console.error("not alowed digit above 9 or below zero")
        } else {
            setDigitNumber(props.digitNumber)

            let timeout = 200

            let animatiomWaiteTimer = setTimeout(() => {
                setPrevNumber(props.digitNumber)
            }, timeout * 2 - 50);

            return () => {
                clearTimeout(animatiomWaiteTimer)
            }
        }
    }, [props.digitNumber])
    //#endregion

    return (
        <div key={digitNumber} className={ModeContextConsumer.mode === "light" ? Styles.light : Styles.dark}>
            <div className={Styles.digitBox}>
                <div className={`${Styles.digit} ${Styles.top}`}>
                    <div key={props.digitNumber} className={Styles.animatedTop}>{prevNumber}</div>
                    <div className={Styles.topDigit}>{digitNumber}</div>
                </div>
                <div className={`${Styles.digit} ${Styles.bottom}`}>
                    <div key={props.digitNumber} className={Styles.animatedBottom}>{digitNumber}</div>
                    <div className={Styles.bottomDigit}>{prevNumber}</div>
                </div>
            </div>
        </div >
    )
}
