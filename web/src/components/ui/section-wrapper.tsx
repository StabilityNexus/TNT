"use client";

import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/components/scroll-animation-provider";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const { registerSection } = useScrollAnimation();

  useEffect(() => {
    if (ref.current) {
      registerSection(id, ref.current);
    }
  }, [id, registerSection]);

  return (
    <section id={id} ref={ref} className={cn(className)}>
      {children}
    </section>
  );
}
