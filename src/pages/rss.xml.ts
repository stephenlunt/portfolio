import rss from "@astrojs/rss"
import type { APIRoute } from "astro"
import { getCollection, type CollectionEntry } from "astro:content"

export const GET: APIRoute = async (context) => {
  const baseUrl = (context.site as URL).href
  const posts: CollectionEntry<"blog">[] = await getCollection("blog")

  return rss({
    title: "Stephen Lunt Blog",
    description: "Stephen Lunt's personal and tech blog.",
    site: baseUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.created,
      link: `${baseUrl}/blog/${post.slug}`,
    })),
  })
}
