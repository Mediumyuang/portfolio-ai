import { ReactNode } from 'react';
import { useGlare } from '../hooks/useGlare';

interface GlareButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

const GlareButton = ({ 
  children, 
  className = '', 
  href, 
  onClick,
  type = 'button',
  variant = 'primary'
}: GlareButtonProps) => {
  const { ref, style } = useGlare();

  const baseClasses = variant === 'primary' 
    ? 'px-6 py-3 bg-luxury-red text-white font-medium hover:bg-luxury-red-light transition-colors glare-button'
    : 'px-6 py-3 border border-luxury-red/30 bg-black/20 backdrop-blur-sm text-luxury-white hover:border-luxury-red/50 hover:bg-black/30 transition-all glare-button';

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`${baseClasses} ${className}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default GlareButton;

