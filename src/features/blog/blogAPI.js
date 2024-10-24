import service from '@Services/contentful/index.js';

const CONTENT_TYPE = 'blogPost';

const blogAPI = {
  async getBlogs(searchParams) {
    const params = { ...searchParams, content_type: CONTENT_TYPE };

    const result = await service.contentfulClient.getEntries(params);

    return result;
  },
};

export default blogAPI;
