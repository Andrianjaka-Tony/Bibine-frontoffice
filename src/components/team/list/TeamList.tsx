import { FunctionComponent } from "react";
import TeamCard, { Team } from "../card/TeamCard";
import "./TeamList.scss";

interface Props {
  teams: Team[];
}

const TeamList: FunctionComponent<Props> = ({ teams = [] }) => {
  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard {...team} key={index} />
      ))}
    </div>
  );
};

export default TeamList;
