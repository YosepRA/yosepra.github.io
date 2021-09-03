const contentfulSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

async function createContentfulClient(space, accessToken) {
  const contentful = await import('contentful');
  const client = contentful.createClient({
    space,
    accessToken,
  });

  return client;
}

export { contentfulSpaceId, contentfulAccessToken };

export default createContentfulClient;
