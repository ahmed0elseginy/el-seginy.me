"use client";

import { useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollHeader(threshold: number = 50) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const handleScrollChange = useCallback(
    (latest: number) => {
      setScrolled(latest > threshold);
    },
    [threshold]
  );

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return scrolled;
}

