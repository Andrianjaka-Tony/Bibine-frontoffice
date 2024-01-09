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
        "Ceci est ma voiture préférée mais pour cause personnelle, je dois la vendre au plus vite",
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
