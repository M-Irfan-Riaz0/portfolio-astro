interface Props {
  number: string;
  urdu?: string;
  title: string;
  children: React.ReactNode;
}

export default function Step({ number, title, children }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
          Step {number}
        </span>
      </div>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-secondary sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {children}
      </div>
    </section>
  );
}
