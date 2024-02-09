import { useNavigate } from "react-router-dom";
import "./MyProfile.scss";
import {
  FormEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Announce } from "../components/announce/card/AnnounceCard";
import api from "../helpers/url";
import storage from "../helpers/storageHelper";
import mapAnnounces from "../helpers/mapAnnounces";
import { motion } from "framer-motion";
import AnnounceList from "../components/announce/list/AnnounceList";
import useSocket from "../hooks/useSocket";

export default function MyProfile() {
  const navigate = useNavigate();

  const [announces, setAnnounces] = useState<Announce[]>([]);
  const [activePage, setActivePage] = useState<string>("1");
  const [user] = useState<any>(
    JSON.parse(sessionStorage.getItem(storage.user) || "{}")
  );
  const [borderSlider, setBorderSlider] = useState({ left: 0, width: 0 });

  const firstPage = useRef<HTMLSpanElement>(null);

  const { connect, sendPrivateMessage } = useSocket({
    id: user.id,
    userEmail: user.email,
    userName: user.name,
    picturePath: user.profile,
  });

  useEffect(() => {
    connect();
  }, [user.email]);

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
        `${api}/bibine/actu/user/${user.id}/own_annonces?limit=100`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    const fetchSelledAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/user/${user.id}/annonces_vendu`
      );
      response = await response.json();
      const data = response as any;
      setAnnounces(mapAnnounces(data.data, navigate));
    };

    const fetchFavoriteAnnounces = async () => {
      let response = await fetch(
        `${api}/bibine/actu/user/${user.id}/annonces_favoris`
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
  }, [navigate, activePage, user.id]);

  useEffect(() => {
    const fetchContacts = async () => {
      let response = await fetch(`${api}/contact/${user.email}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(storage.token)}`,
        },
      });
      const hello = await response.json();
      console.log(hello);
    };

    fetchContacts();
  }, []);

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

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();
    sendPrivateMessage("Coucou", "peter@gmail.com");
  };

  return (
    <div className="section profile">
      <div className="profile-header">
        <div className="profile-header-user">
          <img
            src={user?.profile}
            alt={user?.name}
            className="profile-header-user-image"
          />
          <span className="profile-header-user-name">{user?.name}</span>
        </div>
      </div>
      <h1 className="title">Message</h1>
      <div className="message-container">
        <form onSubmit={sendMessage}>
          <input type="submit" value="Send" />
        </form>
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
}
