import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  customPaths?: { path: string; label: string }[];
  showHome?: boolean;
  style?: React.CSSProperties;
}

/**
 * A reusable breadcrumb navigation component.
 * 
 * @param customPaths Optional array of custom path objects to override default path names
 * @param showHome Whether to show the home link (defaults to true)
 * @param style Additional styles to apply to the breadcrumb container
 */
const Breadcrumbs: React.FC<BreadcrumbProps> = ({ 
  customPaths,
  showHome = true,
  style
}) => {
  const location = useLocation();
  
  // Split pathname into segments, ignoring empty segments
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  // Create breadcrumb items
  const generateBreadcrumbs = () => {
    const breadcrumbs = [];
    
    // Add home link if requested
    if (showHome) {
      breadcrumbs.push({
        path: '/',
        label: 'Home'
      });
    }
    
    // Build paths from segments with proper labeling
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Check if we have a custom label for this path
      const customPath = customPaths?.find(cp => cp.path === currentPath);
      
      // Generate a human-readable label
      let label = customPath ? customPath.label : segment
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        path: currentPath,
        label
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Don't render breadcrumbs if only the Home link would be shown
  if (breadcrumbs.length === 1 && breadcrumbs[0].label === 'Home') {
    return null;
  }
  
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={style}>
      <ol className="breadcrumb-list">
        {breadcrumbs.map((crumb, index) => {
          // Check if it's the last item (current page)
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li 
              key={crumb.path} 
              className={`breadcrumb-item${isLast ? ' current' : ''}`}
            >
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link to={crumb.path}>{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
      
      <style jsx>{`
        .breadcrumb-nav {
          padding: 1rem 0;
          font-size: 0.9rem;
        }
        
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0;
          color: #aaa;
        }
        
        .breadcrumb-item {
          display: flex;
          align-items: center;
        }
        
        .breadcrumb-item a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .breadcrumb-item a:hover {
          color: #ff8c00;
        }
        
        .breadcrumb-item:not(:last-child)::after {
          content: '/';
          margin: 0 0.5rem;
          color: #666;
        }
        
        .breadcrumb-item.current {
          color: #ddd;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .breadcrumb-nav {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;