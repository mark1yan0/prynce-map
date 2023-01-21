import { useLayoutEffect, useState } from 'react';

export interface IBreakpoints {
  width: number;
  isMobile: boolean;
  isTablet: boolean;
}

function getWindowWidth() {
  return window.innerWidth;
}

const useWindowWidth = (): IBreakpoints => {
  const [width, setWidth] = useState(getWindowWidth());
  const [isMobile, setIsMobile] = useState(width < 400);
  const [isTablet, setIsTablet] = useState(width < 780);

  useLayoutEffect(() => {
    function handleResize() {
      const width = getWindowWidth();
      setWidth(width);
      setIsMobile(width < 400);
      setIsTablet(width < 780);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isMobile,
    isTablet,
  };
};

export default useWindowWidth;
