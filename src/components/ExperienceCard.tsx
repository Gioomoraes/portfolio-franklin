interface ExperienceCardProps {
  title: string;
  description: string;
}

export function ExperienceCard({ title, description }: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:bg-white/10">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}
