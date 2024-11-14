import ProductCard from '@/components/Cards/ProductCard';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { FilterOptions, Products } from './constants';
import FilterDropdown from '@/components/DropDowns/FilterDropdown';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';
interface ProductsSectionProps {

}

const ProductsSection: FC<ProductsSectionProps> = ({  }) => {
  return (
    <section className={styles.productsSection}>
      <div className={styles.productsSection__inner}>
        <div className={styles.productsSection__title}>
            <h2>All product</h2>
            <hr/>
        </div>
        <div className={styles.productsSection__body}>
            <div className={styles.productsSection__body__filter}>
              <div className={styles.productsSection__body__filter__type}>
                <span>Filter:</span>
                <FilterDropdown initial='All Products' options={FilterOptions}/>
              </div>
              <div className={styles.productsSection__body__filter__type}>
                <span>Filter:</span>
                <FilterDropdown initial='All Products' options={FilterOptions}/>
              </div>
            </div>
            <div className={styles.productsSection__body__items}>
              {Products.map((el,_i) => <ProductCard key={_i} id={el.id} img={el.img} name={el.name} price={el.price} />)}
            </div>
            <div className={styles.productsSection__body__footer}>
              <PrimaryButton text='View All'></PrimaryButton>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection;