"use client"
import { DropdownIcon } from '@/services/icons/DropDown'
import styles from './style.module.scss'
import React, { FC, useState } from 'react'

interface FilterDropdownProps {
  options: string[],
  initial:string
}

const FilterDropdown: FC<FilterDropdownProps> = ({ options,initial }) => {
  const [isActive, setIsActive] = useState(false)
  const [activeText, setActiveText] = useState(initial)
  const handleActive = (val:string) => {
    setIsActive(false)
    return setActiveText(val)
  }
  return (
    <div className={styles.filterDropdown}>
     <div  className={styles.filterDropdown__current}>
        <p>{activeText}</p>
     </div>
     <div onClick={() => setIsActive(!isActive)} className={styles.filterDropdown__button}>
      <DropdownIcon />
     </div>
     <div style={isActive?{transform:'translateY(0)',visibility:'visible',opacity:1}:{transform:'translateY(-10px)',visibility:'hidden',opacity:0}} className={styles.filterDropdown__menu}>
     {options.map((el, _i) => <p onClick={() => handleActive(el)} key={_i}>{el}</p>)}
     </div>
    </div>
  )
}

export default FilterDropdown;