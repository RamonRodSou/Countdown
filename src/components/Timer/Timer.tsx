import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import Display from '../Display/Display'
import Controls from '../Controls/Controls'
import LapList from '../LapList/LapList'


const Timer = () => {

  const [ milliseconds, setMilliseconds ] = useState<number> (12232)
  const [ timerOn, setTimerOn ] = useState<number | null>(null)
  const [ laps, setLaps ] = useState<number | []> ([])

  function formatTime (): string {
    
    const minutes:string = ('0' + (Math.floor(milliseconds / 60000) % 60 )).slice(-2)
    const seconds:string = ('0' + (Math.floor(milliseconds / 1000) % 60 )).slice(-2)
    const centiseconds:string = ('0' + (Math.floor(milliseconds / 10) % 100 )).slice(-2)


    return `${minutes}:${seconds}:${centiseconds}`;
  }

  // const startTimer = (interval: string) => {
  //   return setInterval ( () => {
  //     setMilliseconds((prevMilliseconds) => prevMilliseconds + 10)
  //   })
  // }

  // const stopTimer = (interval) => {
  //   clearInterval(interval)
  //   return interval
  // }

  // useEffect (() => {
  //   let interval: number | null = null;
    
  //   if (timerOn) {
  //     interval = startTimer(interval)
  //   }else {
  //     interval = stopTimer(interval)
  //   }
  // })

  return (
    <div className={styles.container}>
      <Display time={formatTime()}/>
      <LapList/>
      <Controls
        // onStart={() => setTimeout(true)}
        // onStop={() => setTimeout(false)}
      />

    </div>
  )
}

export default Timer