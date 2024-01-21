import React from 'react'
import styles from './Display.module.css'

type DisplayProps = {
  time: string
}

const Display: React.FC<DisplayProps> = ({ time }) => {
  return (
    <div className={styles.display}>
      {time}
    </div>
  )
}

export default Display
