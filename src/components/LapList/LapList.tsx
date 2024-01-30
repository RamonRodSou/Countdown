import React from 'react';
import styles from './LapList.module.css';

interface LapsProps {
  laps: string[]
}

const LapList: React.FC<LapsProps> = ({ laps }) => {
  return (
    <div className={styles.timer_Laps}>
      <h3>Laps: </h3>
      <ul>
        {laps.map((lap: string, index: number) => (
          <li key={index}>
            Lap {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LapList
