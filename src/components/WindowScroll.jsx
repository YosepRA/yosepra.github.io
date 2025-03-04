import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setPosition, setDirection } from '@Features/scroll/scroll-slice.js';
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

      lastYPosition.current = scrollYPos;
      lastYDirection.current = scrollYDirection;

      dispatch(setPosition({ x: 0, y: scrollYPos }));
      dispatch(setDirection({ x: '', y: scrollYDirection }));
    };

    const throttledHandleScroll = throttle(handleScroll, 300);

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return null;
};

export default WindowScroll;
