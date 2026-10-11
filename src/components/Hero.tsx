import { motion } from "motion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function Hero() {
  return (
    <section className="bg-bg py-16 sm:py-24">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-text sm:text-5xl">
            Franklin Ferreira
          </h1>

          <p className="mt-4 text-xl font-medium text-teal">
            Tecnologia Educacional, Infraestrutura e Sistemas
          </p>

          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Atuação dedicada a manter a tecnologia como suporte para a educação,
            integrando sistemas, redes e infraestrutura para o bom funcionamento
            do ambiente escolar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projetos" variant="primary">
              Conhecer o trabalho
            </Button>
            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
