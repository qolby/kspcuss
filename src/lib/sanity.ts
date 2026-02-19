import { createClient } from '@sanity/client';

// Public client — used by all pages on the site
// Only returns published content (no drafts)
export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: '2026-02-19',
  useCdn: true,
});

// Preview client — used ONLY by the preview route
// Returns draft content when a token is provided
export const previewClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: '2026-02-19',
  useCdn: false,
  token: import.meta.env.SANITY_PREVIEW_TOKEN,
  perspective: 'previewDrafts',
});
