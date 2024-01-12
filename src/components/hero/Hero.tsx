import { FunctionComponent, ReactEventHandler } from "react";
import "./Hero.scss";
import Link from "../link/Link";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  onLoadedImage: ReactEventHandler;
}

const Hero: FunctionComponent<Props> = ({
  title = "",
  subtitle = "",
  image = "",
  onLoadedImage,
}: Props) => {
  return (
    <section className="hero">
      <img src={title} className="hero-title" alt="Hero title" />
      <p className="hero-subtitle">{subtitle}</p>
      <img
        onLoad={onLoadedImage}
        src={image}
        className="hero-image"
        alt="Hero illustration"
      />
      <div className="hero-btn">
        <Link onClick={() => {}} text={"Commencer"} />
      </div>
    </section>
  );
};

export default Hero;
