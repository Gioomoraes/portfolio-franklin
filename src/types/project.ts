export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "infraestrutura" | "sistema" | "rede" | "suporte";
}
