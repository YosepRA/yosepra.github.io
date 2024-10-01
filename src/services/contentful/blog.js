import client from './client.js';

const CONTENT_TYPE = 'blogPost';

const blog = {
  async getBlogs(searchParams) {
    const params = { ...searchParams, contentType: CONTENT_TYPE };

    const result = await client.getEntries(params);

    return result;
  },
  async getBlogDetails(id) {
    const result = await client.getEntry(id);

    return result;
  },
};

export default blog;
