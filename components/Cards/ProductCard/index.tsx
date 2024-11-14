import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
interface ProductCardProps {
  id:number,
  name:string,
  price:string,
  img:any
}

const ProductCard: FC<ProductCardProps> = ({ id,name,price,img }) => {
  return (
    <div className={styles.productCard}>
     <div>
     <Image src={img} alt='Product Button' />
     </div>
     <div className={styles.productCard__info}>
        <h1>{name} <span>{price}</span></h1>
     </div>
     <div className={styles.productCard__button}>
        <PrimaryButton text='BUY NOW'/>
     </div>
    </div>
  )
}

export default ProductCard;