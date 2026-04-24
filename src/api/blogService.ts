import { sanity } from './sanityClient'

// Obtain minimal fields for lists to avoid overfetching
export const getPosts = async () => {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category,
      tags,
      readTime,
      "image": coverImage.asset->url,
      imageAlt
    }
  `

  return await sanity.fetch(query)
}

// Fetch full post details only when needed
export const getPostBySlug = async (slug: string) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      publishedAt,
      category,
      tags,
      readTime,
      "image": coverImage.asset->url,
      imageAlt
    }
  `

  return await sanity.fetch(query, { slug })
}

// Fetch related posts (excluding current slug)
export const getRelatedPosts = async (currentSlug: string) => {
  const query = `
    *[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc)[0...2] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category,
      tags,
      readTime,
      "image": coverImage.asset->url,
      imageAlt
    }
  `

  return await sanity.fetch(query, { currentSlug })
}