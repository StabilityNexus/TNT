"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";

interface SectionData {
  element: HTMLElement;
  visible: boolean;
}

interface ScrollAnimationContextType {
  registerSection: (id: string, element: HTMLElement) => void;
  sections: Map<string, SectionData>;
}

const ScrollAnimationContext = createContext<ScrollAnimationContextType>({
  registerSection: () => {},
  sections: new Map(),
});

export const useScrollAnimation = () => {
  return useContext(ScrollAnimationContext);
};

export function ScrollAnimationProvider({ children }: { children: ReactNode }) {
  const [, forceUpdate] = useState({});

  const sectionsRef = useRef<Map<string, SectionData>>(new Map());

  const registerSection = useCallback((id: string, element: HTMLElement) => {
    const sectionData = { element, visible: false };

    if (id !== "hero") {
      element.classList.add("section-hidden");
    }

    sectionsRef.current.set(id, sectionData);

    forceUpdate({});
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      const sections = sectionsRef.current;
      let hasVisibilityChanges = false;

      // Check each section's visibility
      sections.forEach((section, id) => {
        if (id === "hero") {
          // Skip hero section animation
          return;
        }

        // Get element position
        const rect = section.element.getBoundingClientRect();
        // Element is visible when it's in the viewport
        const isVisible =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

        // If visibility changed
        if (isVisible !== section.visible) {
          hasVisibilityChanges = true;

          // Update the section data directly in the ref
          section.visible = isVisible;

          if (isVisible) {
            section.element.classList.remove("section-hidden");
            section.element.classList.add("animate-in");
          }
        }
      });

      // Only trigger a re-render if visibility changed
      if (hasVisibilityChanges) {
        forceUpdate({});
      }
    };

    // Initial check with a small delay
    const initialCheckTimeout = setTimeout(checkVisibility, 100);

    // Set up scroll and resize listeners
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      clearTimeout(initialCheckTimeout);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      registerSection,
      sections: sectionsRef.current,
    }),
    [registerSection]
  );

  return (
    <ScrollAnimationContext.Provider value={contextValue}>
      {children}
    </ScrollAnimationContext.Provider>
  );
}
