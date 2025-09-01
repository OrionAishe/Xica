import Card, { props as CardProps } from "@/components/molecules/Card/Card";
import styles from './CardDisplay.module.scss';

interface props {
    title: string;
    Cards: CardProps[];
    Variant: "Primary" | "Secondary";
}
const CardDisplay = (props: props) => {
    const { Cards, title, Variant } = props;
    return (
        <div className={styles.CardDisplay}>
            <h2 className={styles.CardDisplay__Title}>{title}</h2>
            <div className={Variant == "Primary" ? styles.CardDisplay__Cards__Primary : styles.CardDisplay__Cards__Secondary}>
                {Cards.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            image={{
                                src: item.image.src,
                                alt: item.image.alt
                            }} title={item.title}
                            tag={item.tag}
                            link={item.link}
                            index={index} variant={Variant}>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default CardDisplay;