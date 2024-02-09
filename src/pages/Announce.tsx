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

interface Details {
  consommation: any;
  couleur: any;
  kilometre: any;
  localisation: any;
  maintenance: any[];
  motor: any;
}

const Announce: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();
  const [announce, setAnnounce] = useState<AnnounceProp>();
  const [announces, setAnnounces] = useState<AnnounceInterface[]>([]);
  const [details, setDetails] = useState<Details>();

  useLayoutEffect(() => {
    const fetchAnnounce = async () => {
      let response = await fetch(`${api}/bibine/actu/annonces/${id}`);
      response = await response.json();
      let data = response as any;
      data = data.data;
      data = [data];

      const {
        consommation,
        couleur,
        kilometre,
        localisation,
        maintenance,
        motor,
      } = data[0];

      setDetails({
        consommation,
        couleur,
        kilometre,
        localisation: localisation.nom,
        maintenance: maintenance.map((m: any) => m.nom),
        motor: motor.nom,
      });

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
    const fetchOtherAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/pagination/annonces?offset=0&limit=6`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    fetchAnnounce();
    fetchOtherAnnounces();
  }, [id, navigate]);

  return (
    <>
      <div className="section announce">
        <div className="announce-header">
          <div
            onClick={() => {
              navigate(`/profile/${user?.id}`);
            }}
            className="announce-header-user"
          >
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
          <h1 className="subtitle">Détails</h1>
          <div className="row">
            <div className="label">Moteur</div>
            <div className="value">{details?.motor}</div>
          </div>
          <div className="row">
            <div className="label">Consommation</div>
            <div className="value">{details?.consommation} km / litre</div>
          </div>
          <div className="row">
            <div className="label">Couleur</div>
            <div className="value">{details?.couleur.nom || "Inconnu"}</div>
          </div>
          <div className="row">
            <div className="label">Kilometrage</div>
            <div className="value">{details?.kilometre}</div>
          </div>
          <div className="row">
            <div className="label">Localisation</div>
            <div className="value">{details?.localisation}</div>
          </div>
          <h2 className="subtitle">Maintenances</h2>
          {details?.maintenance.map((m, index) => (
            <div className="row" key={index}>
              <div className="label">{m.nom}</div>
            </div>
          ))}
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
