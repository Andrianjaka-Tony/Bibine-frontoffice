import { FunctionComponent, useRef } from "react";
import "./Hero.scss";
import Link from "../link/Link";
import { motion, useInView } from "framer-motion";

const Hero: FunctionComponent = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleView = useInView(titleRef, { once: false });

  const titleVariants = {
    initial: {
      y: "100%",
    },
    animate: (i: number) => ({
      y: "0%",
      transition: {
        ease: "circOut",
        delay: i,
      },
    }),
  };

  return (
    <section className="hero">
      <div ref={titleRef} className="hero-hidder">
        <motion.img
          variants={titleVariants}
          initial="initial"
          animate={titleView ? "animate" : "initial"}
          custom={0.4}
          src="./images/hero/hero-title.png"
          className="hero-title"
          alt="Hero title"
        />
      </div>
      <div className="hero-hidder">
        <motion.p
          variants={titleVariants}
          initial="initial"
          animate={titleView ? "animate" : "initial"}
          custom={0.5}
          className="hero-subtitle"
        >
          Explorez l'élégance sur roues avec notre collection exclusive de
          voitures d'occasion. Chez Bibina, nous vous offrons une expérience
          incomparable, mettant à votre disposition une sélection minutieusement
          choisie de véhicules qui incarnent le mariage parfait entre style et
          performance. Chaque voiture raconte une histoire, révélant une allure
          distinctive et une ingénierie de qualité. Parcourez notre inventaire
          diversifié, allant des berlines sophistiquées aux SUV robustes, et
          découvrez la passion qui se cache derrière chaque modèle. Chez Bibina,
          nous nous engageons à offrir non seulement des voitures, mais une
          véritable expérience de conduite, où l'élégance rencontre la route
        </motion.p>
      </div>
      <motion.div className="video-container">
        <video className="hero-video" autoPlay muted loop>
          <source src="./videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero-btn">
        <Link onClick={() => {}} text={"Commencer"} />
      </div>
    </section>
  );
};

export default Hero;
