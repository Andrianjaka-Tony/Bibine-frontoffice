import { FunctionComponent, useLayoutEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import "./Home.scss";
import blogsData from "../data/blog-data";
import { Announce } from "../components/announce/card/AnnounceCard";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";
import { Blog } from "../components/blog/card/BlogCard";
import BlogList from "../components/blog/list/BlogList";
import { Team } from "../components/team/card/TeamCard";
import teamsData from "../data/team-data";
import TeamList from "../components/team/list/TeamList";
import api from "../helpers/url";
import { useNavigate } from "react-router-dom";
import mapAnnounces from "../helpers/mapAnnounces";

interface Props {}

export const Home: FunctionComponent<Props> = () => {
  const [announces, setAnnounces] = useState<Announce[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const fetchAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/annonces/recentes?offset=0&limit=6`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    fetchAnnounces();
    setBlogs(blogsData);
    setTeams(teamsData);
  }, [navigate]);

  return (
    <>
      <Hero />
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
      <section className="section">
        <h1 className="title">A propos</h1>
      </section>
      <section className="section home-section team-section">
        <h2 className="title">Equipe</h2>
        <TeamList teams={teams} />
      </section>
    </>
  );
};

export default Home;
