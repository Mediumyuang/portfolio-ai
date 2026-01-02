import { useRef, useState, useEffect } from 'react';

interface UseGlareReturn {
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  style: React.CSSProperties;
}

export const useGlare = (): UseGlareReturn => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
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

