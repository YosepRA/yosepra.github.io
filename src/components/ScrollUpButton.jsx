import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import ScrollContext from './scroll/ScrollContext.jsx';

import mainStyles from '../styles/main.module.scss';

function ScrollUpButton() {
  const { isScrollingDown } = useContext(ScrollContext);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={cn(mainStyles.scrollBtn, {
        [mainStyles.scrollBtnDown]: isScrollingDown,
      })}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon="angle-up" />
    </button>
  );
}

export default ScrollUpButton;
