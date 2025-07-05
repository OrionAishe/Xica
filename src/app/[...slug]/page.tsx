import { getEntry } from "@/api/Contentful";
import Title from "@/components/atoms/Title/Title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { text } from "stream/consumers";
import styles from './page.module.scss'

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const data = await getEntry("post", URLtoTitle(params.slug[0]));

  function URLtoTitle(URL: string) {
    const Title = URL.replaceAll("-", " ").replace("/", "");
    return Title;
  }
  const text = documentToReactComponents(data.data.postCollection.items[0].texto.json);

  console.log(data.data.postCollection.items[0].texto.json)
  return (
    <>
      <div className={styles.PostPage}>
        <Title>{URLtoTitle(params.slug[0])}</Title>
        <img src={data.data.postCollection.items[0].image.src.url} alt={data.data.postCollection.items[0].image.alt} />
        {text}
      </div>
    </>
  );
}
