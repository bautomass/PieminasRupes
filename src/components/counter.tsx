import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  decimals?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  from,
  to,
  duration = 2,
  decimals = 0,
  className,
}) => {
  const [count, setCount] = useState(from);
  const countRef = useRef(from);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    // Reset counter if target number changes
    setCount(from);
    countRef.current = from;
    startTimeRef.current = 0;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    // Start animation
    startTimeRef.current = performance.now();
    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      // Calculate elapsed time as a fraction of total duration
      const progress = Math.min(
        (timestamp - startTimeRef.current) / (duration * 1000),
        1
      );

      // Use easeOutExpo for smoother counting at the end
      const easedProgress =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      // Calculate current count value
      const currentCount = from + (to - from) * easedProgress;

      // Update state and ref
      setCount(currentCount);
      countRef.current = currentCount;

      // Continue animation if not complete
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animateCount);
      }
    };

    frameRef.current = requestAnimationFrame(animateCount);

    // Cleanup animation on unmount
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [from, to, duration]);

  // Format number with decimals
  const formattedCount = count.toFixed(decimals);

  return <span className={className}>{formattedCount}</span>;
};

export default Counter;
