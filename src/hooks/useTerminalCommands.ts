import { chronicles } from "../data/chronicles";
import { certificates } from "../data/certificates";
import { profile, skills } from "../data/profile";
import { useChronicleStore } from "../store/chronicleStore";
import { useTerminalStore, type TerminalLine } from "../store/terminalStore";
import { useUiStore } from "../store/uiStore";

type LineInput = Omit<TerminalLine, "id">;

const commands = ["help", "chronicles", "certificates", "resume", "about", "skills", "connect", "clear"];

export function useTerminalCommands() {
  const pushLines = useTerminalStore((state) => state.pushLines);
  const pushLine = useTerminalStore((state) => state.pushLine);
  const clear = useTerminalStore((state) => state.clear);
  const addCommandToHistory = useTerminalStore((state) => state.addCommandToHistory);
  const setActiveChronicle = useChronicleStore((state) => state.setActiveChronicle);
  const openResume = useUiStore((state) => state.openResume);
  const setNavigationState = useUiStore((state) => state.setNavigationState);

  function execute(rawCommand: string) {
    const normalized = rawCommand.trim();
    if (!normalized) return;

    const [command, ...args] = normalized.toLowerCase().split(/\s+/);
    addCommandToHistory(normalized);
    pushLine({ variant: "input", text: `chronicle-os$ ${normalized}` });

    if (command === "clear") {
      clear();
      return;
    }

    if (command === "open") {
      const target = args.join(" ");
      const chronicle = chronicles.find((item) => item.id === target || item.title.toLowerCase().includes(target));

      if (!chronicle) {
        pushLine({ variant: "error", text: "CHRONICLE NOT FOUND. Try open blinkit or open flowy." });
        return;
      }

      useChronicleStore.getState().setActiveChronicle(chronicle.id);
      pushLine({ variant: "system", text: `OPENING CHRONICLE: ${chronicle.title}` });
      pushLine({ variant: "muted", text: `[DEBUG] Store state updated to: ${chronicle.id}` });
      return;
    }

    const output = getCommandOutput(command, openResume);
    pushLines(output);
  }

  function autocomplete(value: string) {
    const match = commands.find((command) => command.startsWith(value.toLowerCase()));
    return match ?? value;
  }

  return { execute, autocomplete };
}

function getCommandOutput(command: string, openResume: () => void): LineInput[] {
  switch (command) {
    case "help":
      return [
        { variant: "system", text: "AVAILABLE COMMANDS" },
        { variant: "muted", text: "chronicles" },
        { variant: "muted", text: "certificates" },
        { variant: "muted", text: "resume" },
        { variant: "muted", text: "about" },
        { variant: "muted", text: "skills" },
        { variant: "muted", text: "connect" },
        { variant: "muted", text: "clear" },
      ];
    case "chronicles":
      return [
        { variant: "system", text: "AVAILABLE CHRONICLES" },
        ...chronicles.map((chronicle) => ({ variant: "muted" as const, text: chronicle.title })),
        { variant: "system", text: "Use open blinkit or open flowy." },
      ];
    case "certificates":
      return [
        { variant: "system", text: "CERTIFICATE REGISTRY" },
        ...certificates.flatMap((certificate) => [
          {
            variant: "muted" as const,
            text: `${certificate.title} - ${certificate.issuer}${certificate.date ? ` (${certificate.date})` : ""}`,
          },
          {
            variant: "link" as const,
            text: "Open certificate",
            href: certificate.documentUrl,
          },
        ]),
      ];
    case "resume":
      openResume();
      return [{ variant: "system", text: "OPENING PREMIUM DOCUMENT VIEWER" }];
    case "about":
      return [
        { variant: "system", text: "PROFESSIONAL OVERVIEW" },
        { variant: "muted", text: profile.overview },
      ];
    case "skills":
      return [
        { variant: "system", text: "SKILL REGISTRY" },
        ...Object.entries(skills).flatMap(([group, items]) => [
          { variant: "system" as const, text: group },
          ...items.map((item) => ({ variant: "muted" as const, text: `* ${item}` })),
        ]),
      ];
    case "connect":
      return [
        { variant: "system", text: "ESTABLISHING CONNECTION" },
        { variant: "muted", text: profile.contact.phone },
        { variant: "link", text: "LinkedIn", href: profile.contact.linkedin },
        { variant: "link", text: "GitHub", href: profile.contact.github },
        { variant: "link", text: "Email", href: `mailto:${profile.contact.email}` },
      ];
    default:
      return [{ variant: "error", text: "UNKNOWN COMMAND. Type help." }];
  }
}
