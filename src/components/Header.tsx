import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Container } from "./Container";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <Container>
        <div className="flex items-center justify-between py-4">
          <span className="font-heading text-lg font-bold text-white">
            Franklin Ferreira
          </span>

          <nav className="hidden gap-8 lg:flex">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="text-white lg:hidden"
              aria-label="Abrir menu de navegação"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-4 pb-4 lg:hidden">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-teal"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}
      </Container>
    </header>
  );
}
