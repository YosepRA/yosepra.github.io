import React, { useState, useEffect, useRef } from 'react';

import Context from './ScrollContext.jsx';
import { throttle } from '../../utils/helpers.js';

const ScrollProvider = function ScrollProviderComponent({
  children,
  scrollContainer,
  throttleTime,
}) {
  if (typeof scrollContainer === 'undefined') {
    return children;
  }

  const isScrollingDown = useRef(false);
  const scrollX = useRef(0);
  const scrollY = useRef(0);

  const [isScrollingDownValue, setIsScrollingDownValue] = useState(false);
  const [scrollXValue, setScrollXValue] = useState(0);
  const [scrollYValue, setScrollYValue] = useState(0);

  const handleScroll = throttle(() => {
    const scrollContainerX =
      scrollContainer.scrollX === undefined
        ? scrollContainer.scrollLeft
        : scrollContainer.scrollX;
    const scrollContainerY =
      scrollContainer.scrollY === undefined
        ? scrollContainer.scrollTop
        : scrollContainer.scrollY;

    if (
      scrollContainerX !== scrollX.current ||
      scrollContainerY !== scrollY.current
    ) {
      isScrollingDown.current = scrollContainerY > scrollY.current;
      scrollX.current = scrollContainerX;
      scrollY.current = scrollContainerY;

      setIsScrollingDownValue(isScrollingDown.current);
      setScrollXValue(scrollX.current);
      setScrollYValue(scrollY.current);
    }
  }, throttleTime);

  useEffect(() => {
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        isScrollingDown: isScrollingDownValue,
        scrollX: scrollXValue,
        scrollY: scrollYValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ScrollProvider.defaultProps = {
  scrollContainer: window,
  throttleTime: 200,
};

export default ScrollProvider;
