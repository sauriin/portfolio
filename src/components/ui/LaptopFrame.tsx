import React from "react";
import { TerminalWindow } from "../terminal/TerminalWindow";

export function LaptopFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative mx-auto w-full max-w-6xl aspect-video group">
            {/* Laptop Lid/Screen */}
            <div className="relative h-full w-full rounded-t-3xl border-[12px] border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-[#333]">
                {/* Bezel/Screen Area */}
                <div className="h-full w-full bg-black overflow-hidden relative">
                    {/* Camera/Sensor */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/10 mt-2" />

                    {/* The actual content (The OS) */}
                    <div className="h-full w-full overflow-auto bg-chronicle-bg">
                        {children}
                    </div>
                </div>
            </div>

            {/* Laptop Base/Keyboard Area */}
            <div className="relative h-12 w-[108%] -left-[4%] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-b-xl shadow-xl border-t border-white/5">
                {/* Touchpad area */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-1 bg-white/10 rounded-t-md" />
            </div>
        </div>
    );
}
