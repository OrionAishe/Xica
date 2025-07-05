import * as contentful from 'contentful'

const PAGE_GRAPHQL_FIELDS = `
 	title,
    description,
    image{
        src{
            url
        },
        alt
    },
    tagsCollection{
        items{
        title
        color
    }
}
`;

const POST_GRAPHQL_FIELDS = `
texto{
      json
    },
image{
    src{
        url
    },
    alt
},
`
const {
    ACCESSTOKEN,
    SPACEID
} = process.env

const client = contentful.createClient({
    space: SPACEID!,
    accessToken: ACCESSTOKEN!,
})

export async function getRichText(title: string) {
    const richText = await client.getEntries({
        content_type: 'post',
        'fields.title': title,
    })
    
    return richText.items[0].fields.texto;
}

async function fetchGraphQL(query: string) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
    };

    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACEID}`,
        {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ query }),
            next: {
                revalidate: 3600,
            },
        }
    ).then((response) => {
        return response.json();
    });
}

export async function getAllEntries(limit = 100) {
    try {
        const query = `query {
      postCollection(
        limit: ${limit},
      ) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`;
        const entries = await fetchGraphQL(query);
        return entries;
    } catch (error) {
        console.error("Erro ao buscar entradas:", error);
        return [];
    }
}

export async function getEntry(contentType: string, title: string) {

    try {
        const entry = await fetchGraphQL(
            `query {
          postCollection (
          where: { title: "${title}" },
          limit: 1,
          preview: false
        ) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
        }
      }`
        );

        const characteristicsData =
            entry.data?.[
                `${contentType}Collection`
            ]?.items?.[0]?.characteristicsCollection?.items.map((item: { information: any; }) => {
                return {
                    information: item.information,
                };
            }) || [];

        return {
            ...entry,
            characteristics: characteristicsData,
        };
    } catch (error) {
        console.error("Erro ao buscar entrada:", error);
        return null;
    }
}