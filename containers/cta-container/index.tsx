import Image from 'next/image';
import HeroBackground from '../hero-container/hero-background';
import styles from './style.module.scss'
import React, { FC } from 'react'
import wave from "@/assets/hero/productWave.png"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import product from "@/assets/product/product3.webp"
interface CtaSectionProps {

}

const CtaSection: FC<CtaSectionProps> = ({  }) => {
  return (
    <section className={styles.ctaSection}>
        <HeroBackground />
        <div className={styles.ctaSection__inner}>
            <div className={styles.ctaSection__inner__info}>
                <div className={styles.ctaSection__inner__info__title}>
                    <span>BEST PRICE</span>
                    <h1>Swat Green Emerald</h1>
                </div>
                <div className={styles.ctaSection__inner__info__price}>
                    <span>10,000 PKR</span>
                    <h3>11,000 PKR</h3>
                </div>
                <div className={styles.ctaSection__inner__info__description}>
                    <p>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                    </p>
                </div>
                <div className={styles.ctaSection__inner__info__button}>
                    <PrimaryButton text='Buy Now'/>
                </div>
            </div>
            <div className={styles.ctaSection__inner__img}>
                <div className={styles.ctaSection__inner__img__frame}>
                    <Image src={product} alt='Product' />
                </div>
            </div>
        </div>
        <div className={styles.ctaSection__wave}>
            <Image src={wave} alt=''/>
        </div>
    </section>
  )
}

export default CtaSection;