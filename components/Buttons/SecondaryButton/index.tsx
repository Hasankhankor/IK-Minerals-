import styles from './style.module.scss'
import React, { FC } from 'react'

interface SecondaryButtonProps {
  text:string
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text }) => {
  return (
    <button className={styles.secondaryButton}>{text}</button>
  )
}

export default SecondaryButton;