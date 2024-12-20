import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  label: string;
  onClick: () => void;
  hasBadge?: boolean;
  badgeContent?: number;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  label,
  onClick,
  hasBadge = false,
  badgeContent = 0,
}) => (
  <Link to={to} className="text-2xl relative" onClick={onClick}>
    {label}
    {hasBadge && badgeContent > 0 && (
      <span className="absolute -top-2 -right-8 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {badgeContent}
      </span>
    )}
  </Link>
);

export default SidebarLink;
