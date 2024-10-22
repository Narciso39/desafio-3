import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationTracker: React.FC = () => {
  const location = useLocation();
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const currentPath = useRef(location.pathname);

  useEffect(() => {
    return () => {
      setPreviousPage(currentPath.current);
      currentPath.current = location.pathname;
    };
  }, [location]);

  return (
    <div>
      <h1>Current Page: {location.pathname}</h1>
      <h2>Previous Page: {previousPage}</h2>
    </div>
  )
};

export default NavigationTracker;
