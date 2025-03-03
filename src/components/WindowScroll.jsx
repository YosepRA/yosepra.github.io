import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setPosition,
  setDirection,
  selectY,
  selectDirectionY,
} from '@Features/scroll/scroll-slice.js';
import { throttle } from '@Utils/helpers.js';

const WindowScroll = function WindowScrollComponent() {
  const dispatch = useDispatch();
  const lastYPosition = useRef(0);
  const lastYDirection = useRef('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollYPos = window.scrollY;
      const scrollYDirection =
        scrollYPos > lastYPosition.current ? 'down' : 'up';

      console.log(
        '🚀 ~ handleScroll ~ lastYPosition.current:',
        lastYPosition.current,
      );
      console.log('🚀 ~ handleScroll ~ scrollYPos:', scrollYPos);

      console.log(
        '🚀 ~ handleScroll ~ lastYDirection.current:',
        lastYDirection.current,
      );
      console.log('🚀 ~ handleScroll ~ scrollYDirection:', scrollYDirection);

      lastYPosition.current = scrollYPos;
      lastYDirection.current = scrollYDirection;

      dispatch(setPosition({ x: 0, y: scrollYPos }));

      // Only change state direction if the scroll goes to a different way.
      if (lastYDirection.current !== scrollYDirection) {
        dispatch(setDirection({ x: '', y: scrollYDirection }));
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 3000);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return null;
};

export default WindowScroll;
