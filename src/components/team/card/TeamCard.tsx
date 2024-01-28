import { FunctionComponent } from "react";
import "./TeamCard.scss";
import WordWrapper from "../../wrapper/word/WordWrapper";

export interface Team {
  photo: string;
  name: string;
  post: string;
  numero: number;
}

const TeamCard: FunctionComponent<Team> = ({
  photo = "",
  name = "",
  post = "",
  numero = 0,
}) => {
  return (
    <div className="team-card">
      <img src={photo} className="team-card-photo" alt={name} />
      <div className="team-card-details">
        <p className="team-card-details-post">
          <WordWrapper className="" word={post} />
        </p>
        <p className="team-card-details-name">
          <WordWrapper className="" word={name} />
        </p>
        <p className="team-card-details-numero">
          <WordWrapper className="" word={`ETU 00${numero}`} />
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
