import CardDisplay from "@/components/organisms/CardDisplay/CardDisplay";
import { getAllEntries } from '@/api/Contentful'
import { dataToCard, titleToURL } from "@/utils/utils";

export default async function Home() {

  const data = await getAllEntries();
  const Cards = dataToCard(data.data.postCollection.items);
  const recentNews = Cards.slice(0,3);

  return (
    <>
      <CardDisplay title={"Notícias Recentes"} Cards={recentNews} Variant={"Secondary"}></CardDisplay>
      <CardDisplay Cards={Cards} title={"Todos os Posts"} Variant={"Primary"}></CardDisplay>
    </>);
}
