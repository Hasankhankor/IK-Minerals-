import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import product from '@/assets/product.png'
interface HeroProductCardProps {
  id:number,
  name:string,
  price:string,
  img:any
}

const HeroProductCard: FC<HeroProductCardProps> = ({ id, name, price, img }) => {
  return (
    <div className={styles.heroProductCard}>
        <Image src={img} alt=''/>
           <hr/>
        <h2>{name + ' '} <span>- {price} </span></h2>
    </div>
  )
}

export default HeroProductCard;