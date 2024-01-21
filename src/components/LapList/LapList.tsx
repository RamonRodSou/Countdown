import React from 'react'
import styles from './LapList.module.css'

const LapList = () => {
  return (
    <div className={styles.timer_Laps}>
      <h3>Laps: </h3>
      <ul>
      <li>Lap 1: 01:05</li>
      <li>Lap 2: 02:06</li>
    </ul>
  
    </div>
  )
}

export default LapList