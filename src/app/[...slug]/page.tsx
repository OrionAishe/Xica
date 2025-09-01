import { getAllEntries, getEntry } from "@/api/Contentful";
import Title from "@/components/atoms/Title/Title";
import styles from './page.module.scss'
import Richtext from "@/components/atoms/Richtext/Richtext";
import CardDisplay from "@/components/organisms/CardDisplay/CardDisplay";
import { dataToCard } from "@/utils/utils";

interface BlogProps {
  params: Promise<{
    slug: string
  }>;
}

export default async function BlogPost({ params }: BlogProps) {
  const { slug } = await params;
  const data = await getEntry(URLtoTitle(slug[0]));
  const CardData = await getAllEntries();
  const CardFiltered = CardData.items.map((item: any) => {
    const filteredItems = item.fields.tags.filter((item: { fields: { title: string; }; }) => {
      if (data?.fields?.tags > 1) {
        return item.fields.title == data?.fields.tags[0].fields.title || item.fields.title == data?.fields.tags[1].fields.title
      } else {
        return item.fields.title == data?.fields.tags[0].fields.title;
      }
    })
    return { item, filteredItems };
  }).filter((item: any) => {
    return item.filteredItems != ""
  }).map((item: any) => {
    return item.item;
  }).slice(0, 3);

  const Cards = dataToCard(CardFiltered);

  function URLtoTitle(URL: string) {
    const Title = URL.replaceAll("-", " ").replace("/", "");
    return Title;
  }

  return (
      <div className={styles.PostPage}>
        <Title>{data?.fields.title}</Title>
        <h2>{data?.fields.description}</h2>
        <img className={styles.PostPage__Image} src={data?.fields.image.fields.src.fields.file.url} alt={data?.fields.image.fields.alt} />
        <Richtext text={data?.fields.texto}></Richtext>
        <CardDisplay title={"Notícias Relacionadas"} Cards={Cards} Variant={"Secondary"} />
      </div>
  );
}
