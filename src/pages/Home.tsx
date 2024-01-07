import { FunctionComponent, useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import "./Home.scss";
import announcesData from "../data/announce-data";
import blogsData from "../data/blog-data";
import { Announce } from "../components/announce/card/AnnounceCard";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";
import { Blog } from "../components/blog/card/BlogCard";
import BlogList from "../components/blog/list/BlogList";

interface Props {}

export const Home: FunctionComponent<Props> = () => {
  const [announces, setAnnounces] = useState<Announce[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setAnnounces(announcesData);
    setBlogs(blogsData);
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
      <section className="section home-section announce-list-section">
        <h2 className="title">Annonces</h2>
        <AnnounceList announces={announces} />
        <div className="hero-btn">
          <Link onClick={() => {}} text={"Toutes les annonces"} />
        </div>
      </section>
      <section className="section home-section blog-list-section">
        <h2 className="title">Blog et temoignages</h2>
        <BlogList blogs={blogs} />
        <div className="hero-btn">
          <Link onClick={() => {}} text={"Rejoindre la communauté"} />
        </div>
      </section>
    </>
  );
};

export default Home;
