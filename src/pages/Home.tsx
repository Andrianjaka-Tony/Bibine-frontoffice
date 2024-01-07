import { FunctionComponent, useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import "./Home.scss";
import datas from "../data/announce-data";
import { Announce } from "../components/announce/card/AnnounceCard";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";

interface Props {}

export const Home: FunctionComponent<Props> = () => {
  const [announces, setAnnounces] = useState<Announce[]>([]);

  useEffect(() => {
    setAnnounces(datas);
  }, []);

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
      <section className="section announce-list-section">
        <h2 className="title">Annonces</h2>
        <AnnounceList announces={announces} />
        <div className="hero-btn">
          <Link onClick={() => {}} text={"Toutes les annonces"} />
        </div>
      </section>
    </>
  );
};

export default Home;
