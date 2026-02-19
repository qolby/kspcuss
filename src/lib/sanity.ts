import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: '2026-02-19', // use today's date or a fixed recent date
  useCdn: true, // CDN = faster reads; only returns published docs
});
