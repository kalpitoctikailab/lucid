"use client";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BottomNav } from "@/components/ui/BottomNav";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      {children}
      <BottomNav />
    </SmoothScroll>
  );
}
