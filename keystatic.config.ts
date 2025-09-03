import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud', // Use 'cloud' for Keystatic Cloud
  },
  cloud: {
    project: 'nat3/astro2025nat', // Replace with your info from Keystatic Cloud portal
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
