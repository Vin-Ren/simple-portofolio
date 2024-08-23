
import { useRef, useEffect, useState } from 'react';

const ElementVisibilityChecker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={targetRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: isVisible ? 'green' : 'red',
          margin: '50px',
        }}
      >
        {isVisible ? 'Visible' : 'Not Visible'}
      </div>
      <p>Scroll to see visibility changes!</p>
    </div>
  );
};

export default ElementVisibilityChecker;