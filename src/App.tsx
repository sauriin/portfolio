import { ResumeViewer } from "./components/resume/ResumeViewer";
import { TerminalDock } from "./components/terminal/TerminalDock";
import { LaptopFrame } from "./components/ui/LaptopFrame";
import { MacOSDesktop } from "./components/ui/MacOSDesktop";
import { ChronicleWindow } from "./components/chronicles/ChronicleWindow";
import { TerminalWindow } from "./components/terminal/TerminalWindow";
import { useTerminalStore } from "./store/terminalStore";
import { useAppIntro } from "./animations/useAppIntro";

export function App() {
  const rootRef = useAppIntro();
  const isTerminalOpen = useTerminalStore((state) => state.isOpen);

  return (
    <div ref={rootRef} className="h-screen w-screen overflow-hidden bg-[#0a0a0a] text-white relative">
      <ChronicleWindow />
      <ResumeViewer />
      <MacOSDesktop />
      <TerminalDock />
      {isTerminalOpen && <TerminalWindow />}
    </div>
  );
}
