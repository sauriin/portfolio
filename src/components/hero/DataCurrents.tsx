import { useEffect, useRef } from "react";
import gsap from "gsap";

const currents = Array.from({ length: 22 }, (_, index) => index);

export function DataCurrents() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-current]", {
        x: "random(-80, 80)",
        y: "random(-40, 60)",
        opacity: "random(0.18, 0.55)",
        duration: "random(3.4, 7.5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {currents.map((current) => (
        <span
          key={current}
          data-current
          className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-chronicle-primary to-transparent opacity-30"
          style={{
            top: `${8 + ((current * 9) % 86)}%`,
            left: `${-12 + ((current * 17) % 112)}%`,
            width: `${140 + ((current * 31) % 280)}px`,
            transform: `rotate(${-18 + ((current * 7) % 36)}deg)`,
          }}
        />
      ))}
    </div>
  );
}
