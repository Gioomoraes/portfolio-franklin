import type { TechCategory } from "../types/technology";

interface TechCategoryCardProps {
  category: TechCategory;
}

export function TechCategoryCard({ category }: TechCategoryCardProps) {
  const Icon = category.icon;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-teal/10">
      <Icon className="text-teal" size={28} />

      <h3 className="mt-4 text-lg font-semibold text-text">{category.title}</h3>

      <ul className="mt-4 space-y-2">
        {category.items.map((item) => {
          return (
            <li key={item} className="text-sm text-text-muted">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
