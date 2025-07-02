import Tag, { props as Tagprops } from '@/components/atoms/Tag/Tag';
import styles from './Card.module.scss';
import Link from 'next/link';

export interface props {
    image: {
        src: string;
        alt: string;
    }
    title: string;
    description: string;
    tag: Tagprops[];
    link: string;
}

const Card = (props: props) => {
    const { title, description, image, tag, link } = props;
    return (
        <Link className={styles.Card} href={link}>
            <img width={384} height={240} src={image.src} alt={image.alt} />
            <div className={styles.Card__Text}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.Card__Tags}>
                {tag.map((item, index) => {
                    return (
                        <Tag key={index} title={item.title} color={item.color}></Tag>
                    )
                })}
            </div>
        </Link>
    )
}

export default Card;