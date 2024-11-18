import { useEffect, useRef, useState } from "react";

export function useScrollY() {
    const [isActive, setIsActive] = useState(false);
    const scrollRef = useRef(window.scrollY);
    useEffect(() => {
        const handleScroll = () => {
          const current = window.scrollY;
          const prev = scrollRef.current;
          const difference = current - prev;
      
          if (Math.abs(difference) > 10) {
            setIsActive(difference > 0);
            scrollRef.current = current;
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return { isActive };
}
