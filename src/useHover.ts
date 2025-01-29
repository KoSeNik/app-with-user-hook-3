import { useState, useRef, useEffect } from 'react';

interface UseHoverResult {
  hovered: boolean;
  ref: React.RefObject<HTMLElement>;
}

export function useHover(): UseHoverResult {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const handleMouseEnter = () => setHovered(true);
      const handleMouseLeave = () => setHovered(false);

      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return { hovered, ref };
}

