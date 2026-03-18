"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay > 0 ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
