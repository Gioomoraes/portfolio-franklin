import { motion } from "motion/react";
import { GraduationCap, Server, Wifi, Headset } from "lucide-react";
import { Container } from "../components/Container";

const highlights = [
  {
    icon: GraduationCap,
    title: "Sistemas Educacionais",
    description:
      "Implantação e administração de sistemas utilizados no dia a dia da instituição de ensino.",
  },
  {
    icon: Server,
    title: "Infraestrutura de TI",
    description:
      "Estruturação e manutenção de computadores, impressoras, catracas e demais recursos tecnológicos.",
  },
  {
    icon: Wifi,
    title: "Redes e Conectividade",
    description:
      "Implantação de redes Wi-Fi, incluindo acesso para visitantes por meio de voucher.",
  },
  {
    icon: Headset,
    title: "Suporte Tecnológico",
    description:
      "Suporte técnico contínuo para garantir o funcionamento da tecnologia no ambiente escolar.",
  },
];

export function Highlights() {
  return (
    <section className="bg-bg-alt py-14 sm:py-20">
      <Container>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-teal/10"
              >
                <Icon className="text-teal" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
