import { useRef, useState, useEffect } from 'react';

interface UseGlareReturn {
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  style: React.CSSProperties;
}

export const useGlare = (): UseGlareReturn => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const style: React.CSSProperties = {
    '--glare-x': `${mousePosition.x}%`,
    '--glare-y': `${mousePosition.y}%`,
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties;

  return { ref, style };
};

