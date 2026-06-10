import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useAppIntro() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-intro]", {
        y: 28,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return rootRef;
}
