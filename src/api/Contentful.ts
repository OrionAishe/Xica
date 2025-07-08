import * as contentful from 'contentful'

const {
    ACCESSTOKEN,
    SPACEID
} = process.env

const client = contentful.createClient({
    space: SPACEID!,
    accessToken: ACCESSTOKEN!,
})

export async function getEntry(title: string) : Promise<any>  {
    const data = await client.getEntries({
        content_type: 'post',
        'fields.slug': title,
    })

    return data.items[0];
}

export async function getAllEntries() {
    const data = await client.getEntries({
        content_type: 'post',
    })

    return data;
}