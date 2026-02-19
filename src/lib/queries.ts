// All posts for the list page, newest first
export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  image
}`;

// Only the 3 most recent posts for the homepage
export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  image
}`;

// A single post by its slug (for the detail page)
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  image,
  body
}`;

// Just the slugs — used by getStaticPaths to know which detail pages to build
export const ALL_POST_SLUGS_QUERY = `*[_type == "post"] {
  "slug": slug.current
}`;
