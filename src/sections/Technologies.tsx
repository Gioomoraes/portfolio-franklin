import { Container } from "../components/Container";
import { TechCategoryCard } from "../components/TechCategoryCard";
import { technologyCategories } from "../data/technologies";

export function Technologies() {
  return (
    <section id="tecnologias" className="bg-bg py-14 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold text-text">Tecnologias e Soluções</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category) => {
            return (
              <TechCategoryCard key={category.title} category={category} />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
