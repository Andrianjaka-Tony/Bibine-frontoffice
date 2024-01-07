import { FunctionComponent } from "react";
import "./Hero.scss";

interface Props {
  title: "";
  subtitle: "";
  image: "";
}

const Hero: FunctionComponent<Props> = ({
  title = "",
  subtitle = "",
  image = "",
}: Props) => {
  return (
    <section className="hero">
      <img src={title} className="hero-title" alt="Hero title" />
      <p className="hero-subtitle">{subtitle}</p>
      <img src={image} className="hero-image" alt="Hero illustration" />
    </section>
  );
};

export default Hero;
