import { Container } from "../components/Container";
import { ExperienceCard } from "../components/ExperienceCard";
import { experienceAreas } from "../data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="bg-navy py-14 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold text-white">Experiência</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceAreas.map((area) => {
            return (
              <ExperienceCard
                key={area.title}
                title={area.title}
                description={area.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
