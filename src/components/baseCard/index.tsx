import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BaseCard: React.FC<CardProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <div
      className={`border rounded-lg p-4 shadow-md bg-white ${className}`}
    >
      {title && (
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default BaseCard;
