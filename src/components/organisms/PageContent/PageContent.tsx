'use client'
import styles from './PageContent.module.scss'
import Title from "@/components/atoms/Title/Title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface props {
    data: {
        "data": {
            "postCollection": {
                "items": [
                    {
                        "texto": {
                            "json": any
                        },
                        "image": {
                            "alt": string,
                            "src": {
                                "url": string
                            }
                        }
                    }
                ]
            }
        },
        "characteristics": []
    }
}
const PageContent = (props: props) => {
    const { data } = props;

    return <>

    </>
}

export default PageContent;