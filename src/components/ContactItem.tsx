import type { ContactChannel } from "../data/contact";

interface ContactItemProps {
  channel: ContactChannel;
}

export function ContactItem({ channel }: ContactItemProps) {
  const Icon = channel.icon;

  return (
    <a
      href={channel.href}
      className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-teal/10"
    >
      <Icon className="shrink-0 text-teal" size={24} aria-hidden="true" />

      <div>
        <p className="text-sm text-text-muted">{channel.label}</p>
        <p className="font-medium text-text">{channel.value}</p>
      </div>
    </a>
  );
}
