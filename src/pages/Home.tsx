import { FunctionComponent, useLayoutEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import "./Home.scss";
import announcesData from "../data/announce-data";
import blogsData from "../data/blog-data";
import { Announce } from "../components/announce/card/AnnounceCard";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";
import { Blog } from "../components/blog/card/BlogCard";
import BlogList from "../components/blog/list/BlogList";
import { Team } from "../components/team/card/TeamCard";
import teamsData from "../data/team-data";
import TeamList from "../components/team/list/TeamList";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

export const Home: FunctionComponent<Props> = () => {
  const [announces, setAnnounces] = useState<Announce[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loadProgession, setLoadProgression] = useState<number>(0);
  const [loadedValue, setLoadedValue] = useState<number>(0);

  const incrementLoadingProgression = () => {
    setLoadProgression((previous) => previous + 1);
  };

  useLayoutEffect(() => {
    setAnnounces(announcesData);
    setBlogs(blogsData);
    setTeams(teamsData);
    setLoadedValue(1);
    setLoadProgression(0);
  }, []);

  const transitionVariants = {
    initial: {},
    animate: {},
    exit: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const transitionSectionVariants = {
    exit: {
      height: 0,
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loadProgession < loadedValue && (
          <motion.div
            key={"transition"}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="transition"
          >
            <motion.div
              variants={transitionSectionVariants}
              className="transition-section"
            ></motion.div>
            <motion.div
              variants={transitionSectionVariants}
              className="transition-section"
            ></motion.div>
            <motion.div
              variants={transitionSectionVariants}
              className="transition-section"
            ></motion.div>
            <motion.div
              variants={transitionSectionVariants}
              className="transition-section"
            ></motion.div>
            <motion.div
              variants={transitionSectionVariants}
              className="transition-section"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Hero
        title="./images/hero/hero-title.png"
        subtitle="Elevez votre conduite, trouver votre chemin"
        image="./images/hero/hero-image.png"
        onLoadedImage={incrementLoadingProgression}
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
