"use client"
import { useSwiper } from 'swiper/react'
import styles from './style.module.scss'
import React, { FC } from 'react'

interface SlideBulletProps {
  id:number
  activeIndex:number
}

const SlideBullet: FC<SlideBulletProps> = ({ id,activeIndex }) => {
  const swiper = useSwiper()
  
  return (
    <div className={styles.slideBullet} onClick={() => swiper.slideTo(id, 500)} style={activeIndex===id?{background:'#8A93E5'}:{background:'#D7DBFF'}}/>
  )
}

export default SlideBullet;