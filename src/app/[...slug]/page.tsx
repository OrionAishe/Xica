import { getEntry, getRichText } from "@/api/Contentful";
import Title from "@/components/atoms/Title/Title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from '@contentful/rich-text-types';
import styles from './page.module.scss'

interface BlogProps {
  params : Promise<{
    slug: string
  }>;
}

export default async function BlogPost({params} : BlogProps) {
  const { slug } = await params;
  const data = await getEntry("post", URLtoTitle(slug[0]));
  const richtext = await getRichText(URLtoTitle(slug[0]));
  console.log(richtext.items[0].fields)
  
  function URLtoTitle(URL: string) {
    const Title = URL.replaceAll("-", " ").replace("/", "");
    return Title;
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    }
  };

  const text = documentToReactComponents(richtext.items[0].fields.texto, options);

  return (
    <>
      <div className={styles.PostPage}>
        <Title>{URLtoTitle(slug[0])}</Title>
        <img src={data.data.postCollection.items[0].image.src.url} alt={data.data.postCollection.items[0].image.alt} />
        {}
      </div>
    </>
  );
}
