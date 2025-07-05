import { getEntry, getRichText } from "@/api/Contentful";
import Title from "@/components/atoms/Title/Title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from './page.module.scss'
import Richtext from "@/components/atoms/Richtext/Richtext";

interface BlogProps {
  params : Promise<{
    slug: string
  }>;
}

export default async function BlogPost({params} : BlogProps) {
  const { slug } = await params;
  const data = await getEntry("post", URLtoTitle(slug[0]));
  const richtext = await getRichText(URLtoTitle(slug[0]));
  
  function URLtoTitle(URL: string) {
    const Title = URL.replaceAll("-", " ").replace("/", "");
    return Title;
  }

  return (
    <>
      <div className={styles.PostPage}>
        <Title>{URLtoTitle(slug[0])}</Title>
        <img src={data.data.postCollection.items[0].image.src.url} alt={data.data.postCollection.items[0].image.alt} />
        <Richtext text={richtext}></Richtext>
      </div>
    </>
  );
}
