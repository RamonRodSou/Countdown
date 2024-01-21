import React from 'react'
import styles from './Controls.module.css'

const Controls = () => {
  return (
    <div className={styles.controls}>
      <button className={styles.btn}>Start</button>
      <button className={`${styles.btn} ${styles.clear}`}>Clear</button>
    </div>
  )
}

export default Controls