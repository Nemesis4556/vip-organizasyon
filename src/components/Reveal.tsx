import type { ElementType, ReactNode, Ref } from "react";
import { useReveal } from "../hooks/useReveal";

export type RevealVariant = "up" | "fade" | "scale" | "stagger";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  as?: ElementType;
  className?: string;
  threshold?: number;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  fade: "reveal-fade",
  scale: "reveal-scale",
  stagger: "reveal-stagger",
};

/**
 * Scroll ile viewport'a giren içerikleri sinematik şekilde ortaya çıkarır.
 * IntersectionObserver tabanlı useReveal hook'unu sarmalar.
 */
export default function Reveal({
  children,
  variant = "up",
  as: Tag = "div",
  className = "",
  threshold,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>(threshold);

  return (
    <Tag
      ref={ref as Ref<Element>}
      className={`${variantClass[variant]} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
