import SecondaryButton from '@/components/Buttons/SecondaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'
import Link from 'next/link';

interface HeroInfoProps {

}

const HeroInfo: FC<HeroInfoProps> = ({  }) => {
  return (
    <div className={styles.heroInfo}>
     <div className={styles.heroInfo__title}>
            <span>Welcome to</span>
            <h1>IK Minerals  Shop!</h1>
    </div>
    <div className={styles.heroInfo__desc}>
            <p> Unearthing Nature's Green Treasures from the Heart of Swat</p>
    </div>
    <div className={styles.heroInfo__buttons}>
            <SecondaryButton text='SHOP NOW' />
            <Link href={'/'}>about us</Link>
    </div>
    </div>
  )
}

export default HeroInfo;