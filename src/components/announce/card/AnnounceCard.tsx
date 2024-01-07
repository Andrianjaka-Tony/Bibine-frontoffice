import { FunctionComponent, MouseEventHandler } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import "./AnnounceCard.scss";
import PriceParser from "../../../helpers/PriceHelper";

export interface Announce {
  photoes: string[];
  brand: string;
  model: string;
  year: number;
  category: string;
  user: {
    photo: string;
    name: string;
    onClick: MouseEventHandler<HTMLElement>;
  };
  price: number;
  note: number;
  onLike: MouseEventHandler;
  onClick: MouseEventHandler;
}

const AnnounceCard: FunctionComponent<Announce> = ({
  photoes = [],
  brand = "",
  model = "",
  year = 0,
  category = "",
  user = {
    photo: "",
    name: "",
    onClick: () => {},
  },
  price = 0,
  note = 0,
  onLike = () => {},
  onClick = () => {},
}) => {
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
        <div onClick={user.onClick} className="announce-card-profile">
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
          <AiOutlineHeart className="icon" onClick={onLike} />
          <FaArrowRight className="icon" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default AnnounceCard;