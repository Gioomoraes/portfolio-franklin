import { Container } from "../components/Container";

export function About() {
  return (
    <section id="sobre" className="bg-bg py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-text">Sobre</h2>

          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Franklin Ferreira, 54 anos, atua na área de tecnologia educacional,
            sendo responsável pela infraestrutura tecnológica de uma instituição
            de ensino.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Seu trabalho abrange sistemas, redes, equipamentos e suporte
            técnico, garantindo que a tecnologia funcione como uma base estável
            para o ambiente escolar.
          </p>
        </div>
      </Container>
    </section>
  );
}
