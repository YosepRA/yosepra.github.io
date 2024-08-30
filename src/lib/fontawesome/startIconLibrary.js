import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function startIconLibrary() {
  const icons = [faBars, faGithub];

  library.add(...icons);
}

export default startIconLibrary;
