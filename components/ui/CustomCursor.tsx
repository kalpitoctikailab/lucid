"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "view" | "drag" | "play" | "zoom";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400 };
  const ringConfig = { damping: 20, stiffness: 200 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, ringConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const state = target.getAttribute("data-cursor") as CursorState | null;
      if (state) setCursorState(state);
    };

    const handleMouseOut = () => {
      setCursorState("default");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="h-2.5 w-2.5 rounded-full bg-accent"
          animate={{
            scale: cursorState === "default" ? 1 : 0,
            opacity: cursorState === "default" ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />

        {/* Ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-transparent"
          animate={{
            scale: cursorState === "default" ? 1 : 0,
            opacity: cursorState === "default" ? 0.5 : 0,
          }}
          transition={{ duration: 0.15 }}
        />

        {/* View state pill */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-10 w-[140px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-bg text-[10px] font-medium uppercase tracking-widest text-accent"
          animate={{
            scale: cursorState === "view" ? 1 : 0,
            opacity: cursorState === "view" ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          View Project
        </motion.div>

        {/* Play icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-accent/20 text-accent"
          animate={{
            scale: cursorState === "play" ? 1 : 0,
            opacity: cursorState === "play" ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <svg
            className="ml-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>

        {/* Zoom icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-accent/20 text-accent"
          animate={{
            scale: cursorState === "zoom" ? 1 : 0,
            opacity: cursorState === "zoom" ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
