import { Container } from "../components/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy">
      <Container>
        <div className="flex flex-col items-center gap-2 py-8 text-center">
          <span className="font-heading text-lg font-semibold text-white">
            Franklin Ferreira
          </span>
          <p className="text-sm text-white/70">
            Analista de Sistemas • Tecnologia Educacional
          </p>
          <p className="text-xs text-white/50">
            © {currentYear} Franklin Ferreira. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
