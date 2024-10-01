import client from './client.js';

const CONTENT_TYPE = 'project';

const project = {
  async getProjects(searchParams) {
    const params = { ...searchParams, content_type: CONTENT_TYPE };

    const result = await client.getEntries(params);

    return result;
  },
};

export default project;
