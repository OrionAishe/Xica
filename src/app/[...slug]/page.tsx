import { getAllEntries, getEntry, getRichText } from "@/api/Contentful";
import Title from "@/components/atoms/Title/Title";
import styles from './page.module.scss'
import Richtext from "@/components/atoms/Richtext/Richtext";
import CardDisplay from "@/components/organisms/CardDisplay/CardDisplay";
import { dataToCard, titleToURL } from "@/utils/utils";

interface BlogProps {
  params: Promise<{
    slug: string
  }>;
}

export default async function BlogPost({ params }: BlogProps) {
  const { slug } = await params;
  const data = await getEntry("post", URLtoTitle(slug[0]));
  const richtext = await getRichText(URLtoTitle(slug[0]));

  const CardData = await getAllEntries();

  const CardFiltered = CardData.data.postCollection.items.map((item: any) => {
    const filteredItems = item.tagsCollection.items.filter((item: { title: string; }) => {
      return item.title == "Leadership";
    })
    return {item, filteredItems};
  }).filter((item : any) => {
    return item.filteredItems[0].title == "Leadership"
  }).map((item: any) => {
    return item.item;
  }).slice(0,3);

  const Cards = dataToCard(CardFiltered);

  function URLtoTitle(URL: string) {
    const Title = URL.replaceAll("-", " ").replace("/", "");
    return Title;
  }

  return (
    <>
      <div className={styles.PostPage}>
        <Title>{URLtoTitle(slug[0])}</Title>
        <img className={styles.PostPage__Image} src={data.data.postCollection.items[0].image.src.url} alt={data.data.postCollection.items[0].image.alt} />
        <Richtext text={richtext}></Richtext>
        <CardDisplay title={"Notícias Relacionadas"} Cards={Cards} Variant={"Secondary"}></CardDisplay>
      </div>
    </>
  );
}
