import { FunctionComponent, useLayoutEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import "./Announce.scss";
import AnnounceList from "../components/announce/list/AnnounceList";
import Link from "../components/link/Link";
import { Announce as AnnounceInterface } from "../components/announce/card/AnnounceCard";
import WordWrapper from "../components/wrapper/word/WordWrapper";
import Counter from "../components/counter/Counter";
import { useNavigate, useParams } from "react-router-dom";
import api from "../helpers/url";
import mapAnnounces from "../helpers/mapAnnounces";

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
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [announce, setAnnounce] = useState<AnnounceProp>();
  const [announces, setAnnounces] = useState<AnnounceInterface[]>([]);

  useLayoutEffect(() => {
    const fetchAnnounce = async () => {
      let response = await fetch(`${api}/bibine/actu/annonces/${id}`);
      response = await response.json();
      let data = response as any;
      data = data.data;
      data = [data];
      let newAnnounce: AnnounceInterface = mapAnnounces(data, navigate)[0];
      const { brand, model, year, photoes, description, price, note, user } =
        newAnnounce;
      setAnnounce({
        brand,
        model,
        year: parseInt(`${year}`.split("-")[0]),
        photoes,
        description,
        price,
        note,
      });
      setUser(user);
    };
    fetchAnnounce();
  }, [id, navigate]);

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
            <div className="value">
              <Counter
                from={0}
                to={announce ? announce?.price : 0}
                isPrice={true}
              />
            </div>
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
