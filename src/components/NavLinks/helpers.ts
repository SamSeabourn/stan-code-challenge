import { useLocation } from 'react-router-dom';

export const checkActiveRouteCSS = (pathName: string) => {
  let currentPath = useLocation().pathname;
  if (currentPath === '/') currentPath = '/home';
  return useLocation().pathname === pathName
    ? 'link-list__link--active'
    : 'link-list__link';
};
