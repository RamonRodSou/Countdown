import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import Display from '../Display/Display'
import Controls from '../Controls/Controls'
import LapList from '../LapList/LapList'


const Timer = () => {

  const [ milliseconds, setMilliseconds ] = useState<number> (0)
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [ laps, setLaps ] = useState<string[]> ([])

  function formatTime (): string {
    
    const minutes:string = ('0' + (Math.floor(milliseconds / 60000) % 60 )).slice(-2)
    const seconds:string = ('0' + (Math.floor(milliseconds / 1000) % 60 )).slice(-2)
    const centiseconds:string = ('0' + (Math.floor(milliseconds / 10) % 100 )).slice(-2)


    return `${minutes}:${seconds}:${centiseconds}`;
  }


const startTimer = (_interval: any) => {
  return setInterval(() => {
    setMilliseconds((prevMilliseconds) => prevMilliseconds + 10)
  }, 10)
}

const stopTimer = (_interval: any) => {
  clearInterval(_interval)
  return _interval
}

const resetTimer: any = () => {
  setMilliseconds(0)
  setTimerOn(false)
  setLaps([])
}

const addLap: any = () => {

  setLaps([...laps, formatTime()]);
};

useEffect(() => {
  
  let interval: any = null 
  if (timerOn) {
     interval = startTimer(interval)
    } else {
      interval = stopTimer(interval)
    }
    return () => stopTimer(interval)
},[timerOn])

  return (
    <div className={styles.container}>
      <Display time={formatTime()}/>
      <LapList  laps={laps} />
      <Controls 
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />

    </div>
  )
}

export default Timer