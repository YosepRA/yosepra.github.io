import contentfulService from '@Services/contentful/index.js';

const projectFeature = {
  helloWorld() {
    console.log('Project feature says Hello World!');
  },
  getProjects: contentfulService.project.getProjects,
};

export default projectFeature;
