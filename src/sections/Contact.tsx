import { Container } from "../components/Container";
import { ContactItem } from "../components/ContactItem";
import { contactChannels } from "../data/contact";

export function Contact() {
  return (
    <section id="contato" className="bg-bg-alt py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-text">Contato</h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Entre em contato através de um dos canais abaixo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => {
            return <ContactItem key={channel.label} channel={channel} />;
          })}
        </div>
      </Container>
    </section>
  );
}
  