"use client";
import styles from "./style.module.scss";
import HeroProductCard from "@/components/Cards/HeroProductCard";
import React, { FC, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { HeroSlides } from "./constants";
import SlideBullet from "@/components/Buttons/SlideBullet";

interface HeroSliderProps {}

const HeroSlider: FC<HeroSliderProps> = ({}) => {
  const [isClient, setIsClient] = useState(false); // for client-side rendering check
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  // Set isClient to true after component mounts to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the Swiper component on the client
  if (!isClient) return null;

  return (
    <div className={styles.heroSlider}>
      <Swiper
        effect="fade"
        spaceBetween={150}
        slidesPerView={1}
        onSlideChange={(slide) => setActiveIndex(slide.activeIndex)}
        className={styles.heroSlider__wrapper}
        onSwiper={(swiper) => {
          if (swiper) swiperRef.current = swiper;
        }}
      >
        {HeroSlides.map((el, _i) => (
          <SwiperSlide className={styles.heroSlider__wrapper__slide} key={_i}>
            <HeroProductCard
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          </SwiperSlide>
        ))}
        <div className={styles.heroSlider__wrapper__buttons}>
          {/* Arrows removed, only bullets retained */}
          <div className={styles.heroSlider__wrapper__buttons__bullet}>
            {HeroSlides.map((el, _i) => (
              <SlideBullet key={el.id} id={_i} activeIndex={activeIndex} />
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
