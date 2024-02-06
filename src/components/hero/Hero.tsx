import { FunctionComponent, useRef, useState } from "react";
import "./Hero.scss";
import Link from "../link/Link";
import { motion, useInView } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import useMousePosition from "../../hooks/UseMousePosition";

const variants = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: "0%",
    transition: {
      ease: "circOut",
      delay: i,
      duration: 0.6,
    },
  }),
};

const TextWrapper: FunctionComponent = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const subtitleView = useInView(subtitleRef, { once: false });
  const text = `Explorez l'élégance sur roues avec notre collection exclusive de voitures d'occasion. Chez Bibina, nous vous offrons une expérience incomparable, mettant à votre disposition une sélection minutieusement choisie de véhicules qui incarnent le mariage parfait entre style et performance. Chaque voiture raconte une histoire, révélant une allure distinctive et une ingénierie de qualité. Parcourez notre inventaire diversifié, allant des berlines sophistiquées aux SUV robustes, et découvrez la passion qui se cache derrière chaque modèle. Chez Bibina, nous nous engageons à offrir non seulement des voitures, mais une véritable expérience de conduite, où l'élégance rencontre la route.`;

  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.008,
      },
    },
  };

  const wordVariants = {
    initial: {
      y: "110%",
    },
    animate: {
      y: 0,
      transition: {
        ease: "circOut",
        duration: 1.4,
      },
    },
  };

  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      ref={subtitleRef}
      animate={subtitleView ? "animate" : "initial"}
      className="hero-subtitle"
    >
      {Array.from(text.split(" ")).map((word, index) => (
        <div key={index} className="hero-subtitle-hidder">
          <motion.div variants={wordVariants}>{word}</motion.div>
        </div>
      ))}
    </motion.div>
  );
};

const Video: FunctionComponent = () => {
  const ref = useRef(null);
  const video = useRef<HTMLVideoElement>(null);
  const { x, y } = useMousePosition(ref, 50, 50);
  const [hover, setHover] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

  const click = () => {
    const element = video.current as HTMLVideoElement;
    const newPlay = !play;
    newPlay ? element.play() : element.pause();
    setPlay(newPlay);
  };

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={click}
      className="video-container"
    >
      <motion.div
        animate={{
          x,
          y,
          scale: hover ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.6,
        }}
        className="video-cursor"
      >
        {!play ? <FaPlay /> : <FaPause />}
      </motion.div>
      <video ref={video} className="hero-video" autoPlay={play} muted loop>
        <source src="./videos/hero-video.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

const Hero: FunctionComponent = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleView = useInView(titleRef, { once: false });

  return (
    <section className="hero">
      <div ref={titleRef} className="hero-hidder">
        <motion.img
          variants={variants}
          initial="initial"
          animate={titleView ? "animate" : "initial"}
          custom={0.2}
          src="./images/hero/hero-title.png"
          className="hero-title"
          alt="Hero title"
        />
      </div>
      <TextWrapper />
      <Video />
      <div className="hero-btn">
        <Link onClick={() => {}} text={"Commencer"} />
      </div>
    </section>
  );
};

export default Hero;
