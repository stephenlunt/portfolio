---
title: "How I add structured data markup to Astro sites"
description: "A brief overall of structured data and how developers can add structured data markup to an Astro website through an example repository."
created: "2024-01-23 21:00"
heroImage:
  url: "@assets/imgs/blog/astro-structured-data.jpeg"
  alt: "Astro structured data tutorial"
---

This post covers a brief overall of structured data and discusses how developers can add structured data markup to an Astro website through an example repository.

<h2>Contents</h2>

- [What is structured data?](#what-is-structured-data)
- [Why is structured data important?](#why-is-structured-data-important)
- [Example Astro structured data repository](#example-astro-structured-data-repository)
- [WebSite structured data](#website-structured-data)
- [Article structured data](#article-structured-data)
- [More structured data tutorials and testing](#more-structured-data-tutorials-and-testing)

## What is structured data?

Structured data is a **form of markup** that can be added to a website to help explain the page in a more **structured format**. It is commonly used to help bots and web crawlers understand the content of the web. For example, structured data can be added to mark a page's content as a recipe, a job posting, or a blog post.

One format used to represent structured data is [JSON-LD](https://json-ld.org) which stands for **JavaScript Object Notation for Linked Data**. It is the recommended format for [structured data by Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) and supported by [Schema.org](https://schema.org/).

At a basic level, this type of structured data markup is **added to a HTML web page through a script tag** as such `<script type="application/ld+json">`.

## Why is structured data important?

As just mentioned, the main advantage of structured data is that **it can help web crawlers and bots gain a better understanding of your site**. Most web content is unstructured and therefore can be difficult for bots to parse and understand. By introducing a set format to our data, it is in theory easier for bots to extrapolate meaning from it.

Furthermore, structured data is **used extensively in search engine optimisation**, or SEO for short. Structured data can be implemented to control and positively impact how your site or brand appears in search results. Google searches documentation lists benefits such as providing correct site names and article dates, to more powerful [enriched search results](https://developers.google.com/search/docs/appearance/enriched-search-results) like recipe cards and job board listings.

It is worth mentioning that search engines like Google explicitly don't promise any direct advantages from implementing structured data. Adding it to your site is **no guarantee** of the benefits listed above. However, without it, you may render your site completely ineligible for any potential benefits. So, in my opinion, why not take 10-20 minutes to add it?

## Example Astro structured data repository

To help with this tutorial, or for those who simply would sooner dig straight into the code, I've created an [example Astro project on GitHub](https://github.com/stephenlunt/astro-structured-data-example) you can use to get started.

It is an Astro site based on the **default template using [content collections](https://docs.astro.build/en/guides/content-collections/)** to create a simplistic blog post example.

It follows a common pattern in Astro which is to have a `BaseHead.astro` component which is rendered from the main layout and dynamically updated on a per-page basis. Our structured data can be added to the document `<head>` by **creating a structured data slot** to our `Layout.astro` file as seen below.

```astro
---
import BaseHead from "@components/BaseHead.astro";

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props as Props;
---

<!doctype html>
<html lang="en">
  <head>
    <BaseHead title={title} description={description} />
    <slot name="structured-data" />
  </head>
  <body class="bg-zinc-900 text-zinc-100">
    <main class="max-w-3xl mx-auto py-16 px-4 z-10">
      <slot />
    </main>
  </body>
</html>
```

For those not aware of [slots in Astro](https://docs.astro.build/en/core-concepts/astro-components/#slots), they act as **a placeholder to inject other HTML elements**. This makes it ideal for injecting our structured data markup tag into the page.

## WebSite structured data

The `WebSite` structured data schema is specifically **added to the home page of a website**. It contains the most basic of information about a site such as its name and URL, but can also be used to influence search factors such as site names in search and [site links search boxes](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox).

To keep things tidy, I like to create a file for each structured markup I use in the **components folder**. For example, `src/components/WebsiteStructuredData.astro`. This acts as a standalone Astro component for the type of markup I'm adding.

Here is the code for our `WebsiteStructuredData` component.

```astro
---
import { SITE_TITLE } from "@consts";

const pageUrl = new URL(Astro.url.pathname, Astro.site);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_TITLE,
  url: pageUrl,
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

Our component builds the standard JavaScript object in the Astro script section and then stringifies it to a `application/ld+json` script tag in the template. The final step is to import and use this component on the intended page.

In our example repo, we import the component to the home page `index.astro` and render it to the `structured-data` slot.

```astro
---
import WebsiteStructuredData from "@components/WebsiteStructuredData.astro";
import Layout from "@layouts/Layout.astro";
---

<Layout title="Home" description="Example Astro site using structured data.">
  <WebsiteStructuredData slot="structured-data" />
  <!-- Remaining page code ... -->
</Layout>
```

## Article structured data

Another popular piece of structured data is the `Article` markup. The [Article markup](https://developers.google.com/search/docs/appearance/structured-data/article) is used to represent **news styles content or blog posts**.

As Astro requires us to define our content collections schema in a `src/content/config.ts` file, we can use this configuration to easily extract the **frontmatter** from our markdown posts.

Here is the code for doing this in an `ArticleStructuredData.astro` component file.

```astro
---
import type { CollectionEntry } from "astro:content";

type Props = CollectionEntry<"blog">["data"];

const { title, description, createdAt, updatedAt, author, heroImage } =
  Astro.props as Props;

const pageUrl = new URL(Astro.url.pathname, Astro.site);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: createdAt.toISOString(),
  dateModified: updatedAt?.toISOString() ?? undefined,
  url: pageUrl,
  thumbnailUrl: heroImage.url.src,
  image: {
    "@type": "ImageObject",
    url: heroImage.url.src,
    width: heroImage.url.width,
    height: heroImage.url.height,
    caption: heroImage.alt,
  },
  author: {
    "@type": "Person",
    name: author.name,
    description: author.bio,
    url: author.profileUrl,
  },
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

Once again, we need to import this structured data file to our blog post page. This time, using dynamic rendering we can **pass the post data as props** to the component. If you're unfamiliar with this concept, I'd recommend Astro's docs on [generating routes for content collections](https://docs.astro.build/en/guides/content-collections/#generating-routes-from-content) to upskill.

```astro
---
import type { GetStaticPaths } from "astro";
import { Image } from "astro:assets";
import { getCollection, type CollectionEntry } from "astro:content";

import ArticleStructuredData from "@components/ArticleStructuredData.astro";
import FormattedDate from "@components/FormattedDate.astro";
import Layout from "@layouts/Layout.astro";

export const getStaticPaths = (async () => {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}) satisfies GetStaticPaths;

type Props = CollectionEntry<"blog">;

const post = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title} description={post.data.description}>
  <ArticleStructuredData slot="structured-data" {...post.data} />

  <main>
    <h1>{post.data.title}</h1>
    <div class="flex flex-row flex-wrap justify-center gap-1">
      <FormattedDate date={post.data.createdAt} />
      <p class="text-sm text-zinc-300">by {post.data.author.name}</p>
    </div>
    <Image
      src={post.data.heroImage.url}
      alt={post.data.heroImage.alt}
      width={post.data.heroImage.url.width}
      height={post.data.heroImage.url.height}
      decoding="async"
      loading="lazy"
      class="rounded-md"
    />
    <Content />
  </main>
</Layout>
```

That is all! Astro will automatically handle adding the correct structured data to each blog post you write going forward from the frontmatter you define in the markdown files.

## More structured data tutorials and testing

The WebSite and Article markup only encompass two types of structured data you can use, however, there are **many more to choose from depending on your use case**. Google have several [structured data feature guides](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) which are good for giving an overview of specific implementations that Google supports. For those looking for a more in-depth guide to what's available, the [Schema.org documentation](https://schema.org/docs/documents.html) is an excellent site as it defines each available field per markup schema.

Finally, once you've finished adding structured data to your site, it is helpful to **validate it meets the specifications set out**. The best place to do this is with [Schema.org's markup validator](https://validator.schema.org) which takes either a page URL or a code snippet. Alternatively, for Google-specific validation, use their [Rich Results tester](https://search.google.com/test/rich-results).
