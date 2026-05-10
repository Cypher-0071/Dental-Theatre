"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  formatFn?: (v: number) => string;
}

export function Counter({ value, suffix = "", decimals = 0, formatFn }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            if (formatFn) {
              ref.current.textContent = formatFn(v) + suffix;
            } else {
              ref.current.textContent = v.toFixed(decimals) + suffix;
            }
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals, suffix, formatFn]);

  return <span ref={ref}>0{suffix}</span>;
}
