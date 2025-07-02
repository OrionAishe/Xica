import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import styles from './Title.module.scss'

const Title = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <h1 className={styles.Title}>{children}</h1>
    )
}

export default Title;