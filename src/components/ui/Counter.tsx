// components/ui/Counter.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  formatter?: (value: number) => string;
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  formatter = (value) => value.toString(),
}: CounterProps) {
  const [count, setCount] = useState(from);
  const countRef = useRef<number>(from);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / (duration * 1000),
        1
      );

      countRef.current = Math.floor(progress * (to - from) + from);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [from, to, duration]);

  return <>{formatter(count)}</>;
}
