import projectService from './project.js';
import blogService from './blog.js';

const contentfulService = {
  project: projectService,
  blog: blogService,
};

export default contentfulService;
