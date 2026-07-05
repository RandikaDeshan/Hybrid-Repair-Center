import { useEffect, useState, useRef } from "react";

const Counter_JS = ({ target, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);

  const startAnimation = () => {
    cancelAnimationFrame(animationRef.current);

    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    cancelAnimationFrame(animationRef.current);
    setCount(0);
  };

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          reset();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🔥 IMPORTANT FIX: restart when target changes
  useEffect(() => {
    if (ref.current) {
      startAnimation();
    }
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};


export default Counter_JS