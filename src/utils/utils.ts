  import { props as CardProps } from "@/components/molecules/Card/Card";
  
  export function titleToURL(title: string) {
    const URL = title.replaceAll(" ", "-");
    return URL;
  }

  export function dataToCard(data: any[]) : CardProps[]{
    return data.map((item: any) => {
    return (
      {
        title: item.fields.title,
        description: item.fields.description,
        link: `/${titleToURL(item.fields.slug)}`,
        image: { src: item.fields.image.fields.src.fields.file.url, alt: item.fields.image.fields.alt },
        tag: item.fields.tags.map((tag: { fields: { title: any; color: any; }; }) => {
          return (
            { title: tag.fields.title, color: tag.fields.color }
          )
        }),
        index: 0,
        variant: "Primary"
      }
    )
  })
  }