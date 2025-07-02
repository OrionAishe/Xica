import Card, { props as CardProps } from "@/components/molecules/Card/Card";
import styles from './CardDisplay.module.scss';

interface props {
    title: string;
    Cards: CardProps[];
}
const CardDisplay = (props: props) => {
    const { Cards, title } = props;
    return (
        <div className={styles.CardDisplay}>
            <h2 className={styles.CardDisplay__Title}>{title}</h2>
            <div className={styles.CardDisplay__Cards}>
                {Cards.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            image={{
                                src: item.image.src,
                                alt: item.image.alt
                            }} title={item.title}
                            description={item.description}
                            tag={item.tag}
                            link={item.link}>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default CardDisplay;