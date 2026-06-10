type PanelHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PanelHeader({ eyebrow, title, description }: PanelHeaderProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-chronicle-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 max-w-3xl text-lg leading-8 text-chronicle-muted">{description}</p> : null}
    </div>
  );
}
