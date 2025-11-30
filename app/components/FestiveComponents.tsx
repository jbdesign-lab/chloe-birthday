import React from 'react';
import Link from 'next/link';

interface ChristmasCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ChristmasCard: React.FC<ChristmasCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`christmas-card p-8 ${className}`}>
      {children}
    </div>
  );
};

interface FestiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'gift' | 'activity';
  className?: string;
  disabled?: boolean;
}

export const FestiveButton: React.FC<FestiveButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'gift', 
  className = '',
  disabled = false 
}) => {
  const buttonClass = `${variant === 'gift' ? 'gift-button' : 'activity-button'} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClass} 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface FestiveTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const FestiveTitle: React.FC<FestiveTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`festive-text text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-4 sm:mb-6 text-center leading-tight ${className}`}>
      {children}
    </h1>
  );
};