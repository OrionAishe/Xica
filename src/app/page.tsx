import CardDisplay from "@/components/organisms/CardDisplay/CardDisplay";
import { getAllEntries } from '@/api/Contentful'

export default async function Home() {

  function titleToURL(title: string) {
    const URL = title.replaceAll(" ", "-");
    return URL;
  }

  const data = await getAllEntries();
  const Cards = data.data.postCollection.items.map((item: any) => {
    return (
      {
        title: item.title,
        description: item.description,
        link: `/${titleToURL(item.title)}`,
        image: { src: item.image.src.url, alt: item.image.alt },
        tag: item.tagsCollection.items.map((tag: { title: any; color: any; }) => {
          return (
            { title: tag.title, color: tag.color }
          )
        })
      }
    )
  });
  return (
    <>
      <CardDisplay Cards={Cards} title={"Todos os Posts"}></CardDisplay>
    </>);
}
