import { FunctionComponent } from "react";
import AnnounceCard, { Announce } from "../card/AnnounceCard";
import "./AnnounceList.scss";

interface Props {
  announces: Announce[];
}

const AnnounceList: FunctionComponent<Props> = ({ announces = [] }: Props) => {
  return (
    <div className="announce-list">
      {announces.map((announce, index) => (
        <AnnounceCard key={index} {...announce} />
      ))}
    </div>
  );
};

export default AnnounceList;
