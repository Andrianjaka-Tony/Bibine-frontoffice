import { FunctionComponent } from "react";
import Hero from "../components/hero/Hero";
import "./Home.scss";

interface Props {}

export const Home: FunctionComponent<Props> = () => {
  return (
    <>
      <Hero
        title="./images/hero/hero-title.png"
        subtitle="Elevez votre conduite, trouver votre chemin"
        image="./images/hero/hero-image.png"
      />
      <section className="section">
        <h1 className="title">Nouveautés</h1>
      </section>
      <section className="section announce-list">
        <h2 className="title">Annonces</h2>
      </section>
    </>
  );
};

export default Home;
