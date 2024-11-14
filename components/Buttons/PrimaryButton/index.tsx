import styles from './style.module.scss'

import React, { FC } from 'react'

interface PrimaryButtonProps {
  text:string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <button className={styles.primaryButton}>{text}</button>
  )
}

export default PrimaryButton;