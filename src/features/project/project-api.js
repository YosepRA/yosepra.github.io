import service from '@Services/contentful/index.js';

const CONTENT_TYPE = 'project';

const projectAPI = {
  async getProjectList(searchParams) {
    const params = { ...searchParams, content_type: CONTENT_TYPE };

    const result = await service.contentfulClient.getEntries(params);

    return result;
  },
};

export default projectAPI;
