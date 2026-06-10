import { RefObject, useEffect } from "react";
import gsap from "gsap";

export function useGsapReveal(ref: RefObject<HTMLElement | null>, selector: string) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, selector]);
}
