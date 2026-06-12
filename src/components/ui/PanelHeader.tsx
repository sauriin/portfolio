type PanelHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PanelHeader({ eyebrow, title, description }: PanelHeaderProps) {
  return (
    <div className="mb-6 sm:mb-10">
      <p className="mb-2 sm:mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-chronicle-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-6xl">{title}</h2>
      {description ? <p className="mt-4 sm:mt-5 max-w-3xl text-base leading-7 text-chronicle-muted sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
