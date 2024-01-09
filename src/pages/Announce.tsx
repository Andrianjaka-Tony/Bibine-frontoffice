import { FunctionComponent, useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import "./Announce.scss";
import PriceParser from "../helpers/PriceHelper";

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

  useEffect(() => {
    setUser({
      id: "1",
      name: "Ryomen Sukuna",
      photo: "../images/user.png",
    });
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
    <div className="announce">
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
        {announce?.model}
      </div>
      <div className="announce-centered-text announce-year">
        {announce?.year}
      </div>
      <div className="announce-values">
        <div className="announce-value">
          <p className="label">Prix</p>
          <p className="value">{PriceParser(announce?.price)}</p>
        </div>
        <div className="announce-value">
          <p className="label">Note</p>
          <p className="value">{announce?.note}/10</p>
        </div>
      </div>
      <div className="announce-details">
        <h1 className="title">A propos</h1>
        <h2 className="subtitle">Description</h2>
        <p className="text">{announce?.description}</p>
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
  );
};

export default Announce;
