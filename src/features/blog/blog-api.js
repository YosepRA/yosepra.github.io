import service from '@Services/contentful/index.js';

const CONTENT_TYPE = 'blogPost';

const blogAPI = {
  async getBlogList(searchParams) {
    const params = { ...searchParams, content_type: CONTENT_TYPE };

    const result = await service.contentfulClient.getEntries(params);

    return result;
  },
  async getBlogPost(id) {
    const result = await service.contentfulClient.getEntry(id);

    return result;
  },
};

export default blogAPI;
