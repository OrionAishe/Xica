import styles from './Tag.module.scss'

interface props {
    title: string;
    color: string;
}

const Tag = (props: props) => {
    const { title, color } = props;
    const classcolor = () => {
        switch (color) {
            case 'red':
                return styles.red;
            case 'blue':
                return styles.blue;
            case 'purple':
                return styles.purple;
            case 'green':
                return styles.green;
            default:
                return styles.red;
        }

    }
    return (
        <div className={styles.Tag + ' ' + classcolor()}>{title}</div>
    )
}

export default Tag;