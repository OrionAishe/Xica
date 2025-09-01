'use client'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import styles from './Richtext.module.scss'
import { InstagramEmbed } from "react-social-media-embed";

interface props {
  text: any;
}
const Richtext = ({ text }: props) => {

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <img
            className={styles.Richtext__Image}
            src={`https://${node.data.target.fields.file.url}`}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        return (
          <>
            <InstagramEmbed url={node.data.target.fields.link} width={328} />
          </>
        )
      },
    }
  };
  return (
    <>
      {documentToReactComponents(text, options)}
    </>
  )
}

export default Richtext;