import React from 'react';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BaseCard: React.FC<CardProps> = ({
  id,
  children,
  className = '',
  title,
}) => {
  return (
    <div
      id={id}
      data-testid={id}
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
