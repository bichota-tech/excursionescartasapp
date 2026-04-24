import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'uky8kh69', //lo verás en sanity.config.ts
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false //performance (cache global) - disabled for live updates
})