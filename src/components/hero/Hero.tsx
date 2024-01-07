import { FunctionComponent } from "react";
import "./Hero.scss";
import Link from "../link/Link";

interface Props {
  title: string;
  subtitle: string;
  image: string;
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
      <div className="hero-btn">
        <Link onClick={() => {}} text={"Commencer"} />
      </div>
    </section>
  );
};

export default Hero;
