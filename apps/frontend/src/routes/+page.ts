import getClient from "../utils/getClient";
 
export async function load({url}) {
    let params = {};
    params.first = +url.searchParams.get("first")
    params.after = +url.searchParams.get("after")
    const client = getClient()
    let itemsData = await client.Items(params)
    let items = itemsData.data.items.edges
    return {
        items: items
    }
}