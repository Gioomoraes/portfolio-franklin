import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Highlights } from "./sections/Highlights";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Technologies } from "./sections/Technologies";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
