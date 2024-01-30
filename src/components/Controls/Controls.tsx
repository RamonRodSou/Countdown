import React from 'react'
import styles from './Controls.module.css'

interface ControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;

  timerOn: boolean;
}

const Controls: React.FC<ControlsProps> = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className={styles.controls}>
      {!timerOn && <button className={styles.btn} onClick={onStart}>Start</button>}
      {timerOn && <button className={styles.btn} onClick={onStop}>Stop</button>}
      {timerOn && <button className={styles.btn} onClick={onLap}>Lap</button>}
      {!timerOn && <button className={`${styles.btn} ${styles.clear}`} onClick={onReset}>Clear</button>}
    </div>
  )
}

export default Controls