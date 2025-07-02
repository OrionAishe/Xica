import { getEntry } from '@/api/Contentful'
import Title from "@/components/atoms/Title/Title";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './page.module.scss'

export default async function Slug() {
  const data = await getEntry("post", "Bill Walsh leadership lessons");
  const text = documentToReactComponents(data.data.postCollection.items[0].texto.json);
  return (
    <div className={styles.PostPage}>
      <Title>Bill Walsh leadership lessons</Title>
      <img src={data.data.postCollection.items[0].image.src.url} alt={data.data.postCollection.items[0].image.alt} />
      {text}
    </div>);
}
