import {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import "./AnnounceCard.scss";
import PriceParser from "../../../helpers/PriceHelper";
import Go from "../../../icons/Go";
import Favori from "../../../icons/Favori";
import { useNavigate } from "react-router-dom";
import storage from "../../../helpers/storageHelper";
import api from "../../../helpers/url";

export interface Announce {
  id: string;
  photoes: string[];
  brand: string;
  model: string;
  year: string;
  category: string;
  user: {
    id: string;
    photo: string;
    name: string;
    onClick: MouseEventHandler<HTMLElement>;
  };
  price: number;
  note: number;
  onFavorite: MouseEventHandler;
  onClick: MouseEventHandler;
  description: string;
  favoris: number[];
}

const AnnounceCard: FunctionComponent<Announce> = ({
  id = "",
  photoes = [],
  brand = "",
  model = "",
  year = 0,
  category = "",
  user = {
    photo: "",
    name: "",
    onClick: () => {},
    id: "",
  },
  price = 0,
  note = 0,
  onFavorite = () => {},
  onClick = () => {},
  description = "",
  favoris = [0],
}) => {
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState<any>({});
  const [isLogged, setLogged] = useState<boolean>(false);
  const [className, setClassName] = useState("");

  useEffect(() => {
    const userStorage = sessionStorage.getItem(storage.user);
    if (userStorage) {
      setUserLogged(JSON.parse(userStorage));
      setLogged(true);
    }
  }, []);

  const favorite = async () => {
    if (isLogged && !favoris.includes(parseInt(userLogged.id))) {
      await fetch(
        `${api}/bibine/user/${userLogged.id}/annonces_favoris/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem(storage.token)}`,
          },
        }
      );
      setClassName("icon active");
    }
    if (isLogged && favoris.includes(parseInt(userLogged.id))) {
      await fetch(
        `${api}/bibine/user/${userLogged.id}/annonces_favoris/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem(storage.token)}`,
          },
        }
      );
      setClassName("icon");
    }
  };

  useEffect(() => {
    const favoriteClassName = () => {
      if (isLogged && favoris.includes(parseInt(userLogged.id))) {
        return "icon active";
      }
      return "icon";
    };
    setClassName(favoriteClassName());
  }, [userLogged.id, favoris, isLogged]);

  return (
    <div className="announce-card">
      <img
        className="announce-card-photo"
        src={photoes[0]}
        alt={`${brand} ${model}`}
      />
      <div className="announce-card-content">
        <p className="announce-card-brand">{brand}</p>
        <p className="announce-card-model">
          {model} - {year}
        </p>
        <p className="announce-card-category">{category}</p>
        <div
          onClick={() => {
            navigate(`/profile/${user.id}`);
          }}
          className="announce-card-profile"
        >
          <img
            className="announce-card-profile-photo"
            src={user.photo}
            alt={user.name}
          />
          <p className="announce-card-profile-name">{user.name}</p>
        </div>
        <div className="announce-card-details">
          <span className="announce-card-details-price">
            <p className="label">Prix</p>
            <p className="value">{PriceParser(price)}</p>
          </span>
          <span className="announce-card-details-note">
            <p className="label">Note</p>
            <p className="value">{note}/10</p>
          </span>
        </div>
        <div className="announce-card-icons">
          <Favori className={className} onClick={favorite} />
          <Go className="icon" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default AnnounceCard;
