import {
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import "./Profile.scss";
import { BsSend } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import api from "../helpers/url";
import { Announce } from "../components/announce/card/AnnounceCard";
import mapAnnounces from "../helpers/mapAnnounces";
import AnnounceList from "../components/announce/list/AnnounceList";

const Profile: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [announces, setAnnounces] = useState<Announce[]>([]);
  const [activePage, setActivePage] = useState<string>("1");
  const [user] = useState({
    id: "1",
    name: "Ryomen Sukuna",
    photo: "/images/user.png",
  });

  const [borderSlider, setBorderSlider] = useState({ left: 0, width: 0 });
  const firstPage = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (firstPage.current) {
      const element = firstPage.current as Element;
      element.classList.add("active");
      const { x, width } = element.getBoundingClientRect();
      const parentX = element.parentElement?.getBoundingClientRect().x;
      setBorderSlider({ left: parentX ? x - parentX : x, width });
    }
  }, []);

  useEffect(() => {
    const fetchOwnAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/user/${id}/own_annonces?limit=100`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    const fetchSelledAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/user/${id}/annonces_vendu`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    const fetchFavoriteAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/user/${id}/annonces_favoris`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    if (activePage === "1") {
      fetchOwnAnnounces();
    } else if (activePage === "2") {
      fetchSelledAnnounces();
    } else if (activePage === "3") {
      fetchFavoriteAnnounces();
    }
  }, [id, navigate, activePage]);

  const switchPage: MouseEventHandler = (event) => {
    const element = event.currentTarget as Element;
    element.parentElement?.childNodes.forEach((childNode) => {
      const childElement: Element = childNode as Element;
      childElement.classList.remove("active");
    });
    element.classList.add("active");
    const page = element.getAttribute("data-page");
    setActivePage(page || "1");
    const { x, width } = element.getBoundingClientRect();
    const parentX = element.parentElement?.getBoundingClientRect().x;
    setBorderSlider({ left: parentX ? x - parentX : x, width });
  };

  return (
    <div className="section profile">
      <div className="profile-header">
        <div className="profile-header-user">
          <img
            src={user?.photo}
            alt={user?.name}
            className="profile-header-user-image"
          />
          <span className="profile-header-user-name">{user?.name}</span>
        </div>
        <div className="announce-header-icons">
          <BsSend
            onClick={() => {
              navigate(`/message/${user.id}`);
            }}
          />
        </div>
      </div>
      <h1 className="title">Annonces</h1>
      <nav className="profile-nav">
        <motion.span
          animate={{ x: borderSlider.left, width: borderSlider.width }}
          transition={{ duration: 0.2, type: "spring" }}
          className="profile-nav-border-slider"
        ></motion.span>
        <span
          data-page={1}
          ref={firstPage}
          onClick={switchPage}
          className="profile-nav-item"
        >
          Toutes
        </span>
        <span data-page={2} onClick={switchPage} className="profile-nav-item">
          Vendues
        </span>
        <span data-page={3} onClick={switchPage} className="profile-nav-item">
          Favoris
        </span>
      </nav>
      <AnnounceList announces={announces} />
    </div>
  );
};

export default Profile;
