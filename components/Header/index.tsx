import { Logo } from '@/services/icons/Logo'
import styles from './style.module.scss'
import React, { FC } from 'react'
import { Basket } from '@/services/icons/Basket'
import { HeaderNavs } from './constants'
import Link from 'next/link'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__inner__logo}>
                <Logo />
                <h1>IK Minerals</h1>
            </div>
            <div className={styles.header__inner__nav}>
                <nav>
                    <ul>
                        {HeaderNavs.map((el,_i) => <li key={_i}><Link href={el.href}>{el.name}</Link></li>)}

                    </ul>
                </nav>
                <div className={styles.header__inner__nav__basket}>
                    <Basket />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;