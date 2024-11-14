import HeroSection from '@/containers/hero-container'
import styles from './style.module.scss'
import ProductsSection from '@/containers/products-container'
import CtaSection from '@/containers/cta-container'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <CtaSection />
    </main>
  )
}
