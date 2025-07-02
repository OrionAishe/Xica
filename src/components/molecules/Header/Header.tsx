'use client'
import React from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const Menu = React.createRef<HTMLUListElement>();
    const Navigation = [
        { title: 'Blog', link: '/' },
        { title: 'Sobre', link: '/sobre' },
    ]
    function OpenNav(e: any) {
        e.currentTarget.classList.toggle(styles.Open);
        Menu.current?.classList.toggle(styles.Open);
    }

    return (
        <header className={styles.Header}>
            <div>
                <Link href={'/'}><Image width={80} height={80} src={'/XICA.png'} alt={'Coletiva Intertransvestigênere Xica Manicongo'} /></Link>
            </div>
            <nav className={styles.Header__Menu} ref={Menu}>
                <ul className={styles.Header__navigation}>
                    {Navigation.map(({ title, link }, index) => {
                        return (
                            <li key={index}><Link href={link}>{title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
            <div className={styles.MenuHamburguer} onClick={OpenNav}>
                <div className={styles.Menu_burguer1} />
                <div className={styles.Menu_burguer2} />
                <div className={styles.Menu_burguer3} />
            </div>
        </header >
    )
}

export default Header;