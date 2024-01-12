import { FunctionComponent, useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import announcesData from "../data/announce-data";
import "./Announce.scss";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";
import { Announce as AnnounceInterface } from "../components/announce/card/AnnounceCard";
import WordWrapper from "../components/wrapper/word/WordWrapper";
import Counter from "../components/counter/Counter";

interface User {
  id: string;
  photo: string;
  name: string;
}

interface AnnounceProp {
  brand: string;
  model: string;
  year: number;
  photoes: string[];
  description: string;
  price: number;
  note: number;
}

const Announce: FunctionComponent = () => {
  const [user, setUser] = useState<User>();
  const [announce, setAnnounce] = useState<AnnounceProp>();
  const [announces, setAnnounces] = useState<AnnounceInterface[]>([]);

  useEffect(() => {
    setUser({
      id: "1",
      name: "Ryomen Sukuna",
      photo: "../images/user.png",
    });
    setAnnounces(announcesData);
  }, []);

  useEffect(() => {
    setAnnounce({
      brand: "Fruit",
      model: "Banane Skyline Turbo 1500",
      year: 2014,
      photoes: [
        "../images/announce/1.png",
        "../images/announce/2.png",
        "../images/announce/3.png",
        "../images/announce/4.png",
        "../images/announce/5.png",
        "../images/announce/6.png",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum harum, facilis doloribus temporibus dolor possimus excepturi? Quam fuga rem odit nemo nobis architecto, exercitationem quasi ratione molestias nesciunt expedita maxime harum blanditiis perferendis, voluptatem labore. Quidem, omnis! Doloribus officia quisquam dicta eum praesentium, omnis iusto voluptates vel eaque eos aperiam enim quasi totam quos repellendus unde reprehenderit dolorem dolore corrupti dolores sint? Explicabo dolorem sequi asperiores incidunt architecto adipisci consectetur rem consequuntur assumenda ab corporis dignissimos tempora debitis recusandae laboriosam, similique voluptatum, tempore, quod vero blanditiis! Assumenda natus saepe laudantium.",
      price: 1000000,
      note: 9.5,
    });
  }, []);

  return (
    <>
      <div className="section announce">
        <div className="announce-header">
          <div className="announce-header-user">
            <img
              src={user?.photo}
              alt={user?.name}
              className="announce-header-user-image"
            />
            <span className="announce-header-user-name">{user?.name}</span>
          </div>
          <div className="announce-header-icons">
            <BsSend />
            <FaSackDollar />
          </div>
        </div>
        <div className="announce-centered-text announce-brand">
          {announce?.brand}
        </div>
        <div className="announce-centered-text announce-model">
          <WordWrapper className="" word={announce?.model} />
        </div>
        <div className="announce-centered-text announce-year">
          <Counter from={0} to={announce ? announce.year : 0} isPrice={false} />
        </div>
        <div className="announce-values">
          <div className="announce-value">
            <p className="label">Prix</p>
            <p className="value">
              <Counter
                from={0}
                to={announce ? announce?.price : 0}
                isPrice={true}
              />
            </p>
          </div>
          <div className="announce-value">
            <p className="label">Note</p>
            <p className="value">{announce?.note}/10</p>
          </div>
        </div>
        <div className="announce-details">
          <h1 className="title">A propos</h1>
          <h2 className="subtitle">Description</h2>
          <div className="text">{announce?.description}</div>
          <h1 className="subtitle">Fiche technique</h1>
        </div>
        <div className="announce-images">
          {announce?.photoes.map((photo, index) => (
            <img
              src={photo}
              alt={photo}
              className="announce-images-image"
              key={index}
            />
          ))}
        </div>
      </div>
      <section className="section home-section announce-list-section">
        <h2 className="title">Annonces similaires</h2>
        <AnnounceList announces={announces} />
        <div className="hero-btn">
          <Link onClick={() => {}} text={"Voir plus"} />
        </div>
      </section>
    </>
  );
};

export default Announce;
