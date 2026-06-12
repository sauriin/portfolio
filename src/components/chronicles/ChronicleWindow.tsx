import React from "react";
import { chronicles } from "../../data/chronicles";
import { useChronicleStore } from "../../store/chronicleStore";
import { BlinkitPage } from "./pages/BlinkitPage";
import { FlowyPage } from "./pages/FlowyPage";

export function ChronicleWindow() {
    const { activeChronicle: activeChronicleId, setActiveChronicle } = useChronicleStore();
    const closeChronicle = () => setActiveChronicle(null);

    const activeChronicle = chronicles.find(c => c.id === activeChronicleId);

    if (!activeChronicle) return null;

    if (!activeChronicle) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-md"
            style={{ zIndex: 9999 }}
        >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col opacity-100 scale-100">
                {/* macOS Window Title Bar */}
                <div className="flex items-center justify-between bg-slate-100 px-4 py-3 border-b border-slate-200 select-none">
                    <div className="flex gap-2">
                        <button
                            onClick={() => useChronicleStore.getState().setActiveChronicle(null)}
                            className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#ff4b43] transition-colors"
                            title="Close"
                        />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 text-slate-500 text-xs font-medium">
                        {activeChronicle.title}.chronicle
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href={activeChronicle.repositoryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors"
                            title="View Repository"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Chronicle Content */}
                <div className="flex-1 overflow-y-auto bg-slate-50 p-6 md:p-10">
                    <div className="max-w-4xl mx-auto">
                        {activeChronicleId === 'blinkit' ? <BlinkitPage /> : <FlowyPage />}
                    </div>
                </div>
            </div>
        </div>
    );
}
