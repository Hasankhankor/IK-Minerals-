import { HeroBlob, HeroBlobSecondary, HeroWave } from '@/services/blob/HeroBlob';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface HeroBackgroundProps {
  
}

const HeroBackground: FC<HeroBackgroundProps> = ({  }) => {
  return (
    <div className={styles.heroBg}>
    <div className={styles.heroBg__blur} />
    <div className={styles.heroBg__blobs}>
        <HeroBlob />
        <HeroBlobSecondary />
    </div>
    </div>
  )
}

export default HeroBackground;