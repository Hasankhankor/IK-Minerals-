import styles from "./style.module.scss";
import React, { FC } from "react";
import HeroBackground from "./hero-background";
import Image from "next/image";
import wave from "@/assets/hero/wave.png";
import HeroInfo from "./hero-info";
import HeroSlider from "./hero-slider";
import { Mouse } from "@/services/icons/Mouse";
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className={styles.heroSection}>
      <HeroBackground />
      <div className={styles.heroSection__inner}>
        <HeroInfo />
        <HeroSlider />
          <div className={styles.heroSection__inner__cta}>
            <Mouse />
            <span>sroll down</span>
          </div>
      </div>
        <div className={styles.heroSection__inner__wave}>
          <Image src={wave} alt="Wave"/>
        </div>
    </section>
  );
};

export default HeroSection;
