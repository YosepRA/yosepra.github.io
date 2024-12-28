import { createClient } from 'contentful';

const contentfulSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

export default client;
