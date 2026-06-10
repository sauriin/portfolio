import React, { useState, useEffect, useRef } from "react";
import { useTerminalStore } from "../../store/terminalStore";
import { useUiStore } from "../../store/uiStore";

export function MacOSDesktop() {
    const [activeVideo, setActiveVideo] = useState(0);
    const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

    useEffect(() => {
        const currentVideo = videoRefs[activeVideo].current;
        if (!currentVideo) return;

        const handleEnded = () => {
            setActiveVideo((prev) => (prev === 0 ? 1 : 0));
        };

        currentVideo.addEventListener('ended', handleEnded);
        return () => currentVideo.removeEventListener('ended', handleEnded);
    }, [activeVideo]);

    return (
        <div className="absolute inset-0 h-full w-full overflow-hidden transition-all duration-1000 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
            {/* Seamless Live Video Background */}
            {[0, 1].map((idx) => (
                <video
                    key={idx}
                    ref={videoRefs[idx]}
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${activeVideo === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <source src="https://motionbgs.com/media/997/windows-colorful-waves.960x540.mp4" type="video/mp4" />
                </video>
            ))}

            {/* Overlay to ensure readability and maintain the 'glass' feel */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0  h-9 bg-white/10 backdrop-blur-xl flex items-center justify-between px-4 text-white text-[12px] font-medium z-50 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <span className="text-base"></span>
                    <span className="font-bold">Chronicle OS</span>
                    <span className="hidden md:block opacity-80 hover:opacity-100 cursor-default transition-opacity">File</span>
                    <span className="hidden md:block opacity-80 hover:opacity-100 cursor-default transition-opacity">Edit</span>
                    <span className="hidden md:block opacity-80 hover:opacity-100 cursor-default transition-opacity">View</span>
                    <span className="hidden md:block opacity-80 hover:opacity-100 cursor-default transition-opacity">Window</span>
                    <span className="hidden md:block opacity-80 hover:opacity-100 cursor-default transition-opacity">Help</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="opacity-80">🔋 92%</span>
                    <span className="opacity-80">📶</span>
                    <span className="opacity-80">🔍</span>
                    <span className="font-semibold">Tue Nov 18 10:03 AM</span>
                </div>
            </div>

            {/* Desktop Icons */}
            <div className="absolute inset-0 pt-20 p-6 grid grid-cols-1 w-fit gap-6 z-10">
                <DesktopIcon
                    label="Terminal"
                    icon={<div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-white/20 flex items-center justify-center text-green-400 font-mono text-lg shadow-2xl"> {'>_'} </div>}
                    onClick={() => {
                        const { openTerminal } = useTerminalStore.getState();
                        openTerminal();
                    }}
                />
                <DesktopIcon
                    label="Resume"
                    icon={<div className="w-16 h-20 bg-white rounded-lg border border-slate-300 shadow-xl flex flex-col items-center justify-center overflow-hidden">
                        <div className="w-full h-4 bg-slate-200 mb-2" />
                        <div className="w-3/4 h-3 bg-slate-100 mb-2" />
                        <div className="w-1/2 h-3 bg-slate-100" />
                    </div>}
                    onClick={() => {
                        const { openResume } = useUiStore.getState();
                        openResume();
                    }}
                />
            </div>

            {/* Center Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <p className="text-white/80 text-lg md:text-xl font-medium mb-4 tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Hey, I'm Saurin! welcome to my
                </p>
                <h1 className="text-white text-[clamp(4rem,15vw,12rem)] font-bold tracking-tighter leading-none animate-in fade-in zoom-in duration-1000">
                    portfolio.
                </h1>
            </div>

            {/* Bottom Dock */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-20 px-4 bg-white/10 backdrop-blur-3xl rounded-[2rem] border border-white/20 flex items-center gap-4 z-50 shadow-2xl transition-all duration-300 hover:scale-105">
                <DockIcon icon={<div className="w-full h-full bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center text-green-400 font-mono text-lg shadow-lg"> {'>_'} </div>} label="Terminal" onClick={() => useTerminalStore.getState().openTerminal()} />
                <DockIcon icon={<div className="w-full h-full bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col p-2 gap-2">
                    <div className="h-2 w-full bg-slate-200 rounded-full" />
                    <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                </div>} label="Resume" onClick={() => useUiStore.getState().openResume()} />
                <DockIcon icon={<div className="w-full h-full bg-blue-600 rounded-2xl shadow-inner flex items-center justify-center text-white text-xl">🌐</div>} label="Browser" onClick={() => alert("Browser not implemented")} />
                <div className="w-px h-12 bg-white/20 mx-1" />
                <DockIcon icon={<div className="w-full h-full bg-zinc-400/50 rounded-2xl flex items-center justify-center text-zinc-700 text-xl">🗑️</div>} label="Trash" onClick={() => alert("Trash is empty")} />
            </div>
        </div>
    );
}

function DesktopIcon({ label, icon, onClick }: { label: string, icon: React.ReactNode, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center w-20 h-20 rounded-lg hover:bg-white/10 transition-all duration-200 group"
        >
            <div className="mb-1 group-hover:scale-110 transition-transform duration-200">{icon}</div>
            <span className="text-white text-[11px] text-center leading-tight px-1 drop-shadow-md font-medium">{label}</span>
        </button>
    );
}

function DockIcon({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="w-14 h-14 rounded-2xl transition-all duration-200 flex items-center justify-center relative group hover:-translate-y-3"
        >
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                {label}
            </span>
            {icon}
        </button>
    );
}
