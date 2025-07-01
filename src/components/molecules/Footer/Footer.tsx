import Link from "next/link";
import styles from './Footer.module.scss'

const Footer = () => {
    const footerLinks = [
        { name: 'Instagram', link: 'https://www.instagram.com/itgmanicongo' },
        { name: 'Facebook', link: 'https://www.facebook.com/itgmanicongo' }
    ]
    return (
        <footer className={styles.Footer}>
            <ul className={styles.Footer__Navigation}>
                {footerLinks.map((item) => {
                    return (
                        <li><Link href={item.link}>{item.name}</Link></li>
                    )
                })}
            </ul>
            © 2025
        </footer>
    )
}

export default Footer;