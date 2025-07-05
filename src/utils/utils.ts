  import { props as CardProps } from "@/components/molecules/Card/Card";
  
  export function titleToURL(title: string) {
    const URL = title.replaceAll(" ", "-");
    return URL;
  }

  export function dataToCard(data: any[]) : CardProps[]{
    return data.map((item: any) => {
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
        }),
        index: 0,
        variant: "Primary"
      }
    )
  })
  }