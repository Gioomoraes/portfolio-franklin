import { Mail, Phone, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

// ATENÇÃO: os valores abaixo são placeholders.
// Substitua "value" e "href" pelos dados reais do Franklin antes de publicar.
export const contactChannels: ContactChannel[] = [
  {
    label: "E-mail",
    value: "seuemail@exemplo.com",
    href: "mailto:seuemail@exemplo.com",
    icon: Mail,
  },
  {
    label: "Telefone",
    value: "(00) 00000-0000",
    href: "tel:+5500000000000",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/seu-usuario",
    href: "https://linkedin.com/in/seu-usuario",
    icon: Link2,
  },
];
