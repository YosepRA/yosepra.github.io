import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faPlay,
  faFileAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faWhatsapp,
  faDiscord,
  faLinkedin,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

function startIconLibrary() {
  const icons = [
    faBars,
    faGithub,
    faPlay,
    faFileAlt,
    faEnvelope,
    faWhatsapp,
    faDiscord,
    faLinkedin,
    faSquareXTwitter,
  ];

  library.add(...icons);
}

export default startIconLibrary;
