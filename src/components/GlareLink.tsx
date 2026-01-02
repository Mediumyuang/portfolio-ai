import { ReactNode, useRef, useState } from 'react';

interface GlareLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const GlareLink = ({ children, href, className = '' }: GlareLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--glare-x': `${mousePos.x}%`,
        '--glare-y': `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 60%)`,
        }}
      />
    </a>
  );
};

export default GlareLink;

