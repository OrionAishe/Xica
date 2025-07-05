'use client'
import Tag, { props as Tagprops } from '@/components/atoms/Tag/Tag';
import styles from './Card.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export interface props {
    image: {
        src: string;
        alt: string;
    }
    title: string;
    description: string;
    tag: Tagprops[];
    link: string;
    index: number;
    variant: "Primary" | "Secondary";
}

const Card = (props: props) => {
    const { title, description, image, tag, link, index, variant } = props;
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (variant == 'Secondary') {
            ref.current?.classList.add(`${styles.Card + index}`);
        }
    }, [])

    return (
        <Link className={styles.Card} href={link} ref={ref}>
            <img className={styles.Card__Image} src={image.src} alt={image.alt} />
            <div className={styles.Card__Text}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.Card__Tags}>
                    {tag.map((item, index) => {
                        return (
                            <Tag key={index} title={item.title} color={item.color}></Tag>
                        )
                    })}
                </div>
            </div>
        </Link>
    )
}

export default Card;