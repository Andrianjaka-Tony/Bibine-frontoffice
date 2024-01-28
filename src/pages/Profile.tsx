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
import { useNavigate } from "react-router-dom";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const switchPage: MouseEventHandler = (event) => {
    const element = event.currentTarget as Element;
    element.parentElement?.childNodes.forEach((childNode) => {
      const childElement: Element = childNode as Element;
      childElement.classList.remove("active");
    });
    element.classList.add("active");
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
        <span ref={firstPage} onClick={switchPage} className="profile-nav-item">
          Toutes
        </span>
        <span onClick={switchPage} className="profile-nav-item">
          Vendues
        </span>
        <span onClick={switchPage} className="profile-nav-item">
          Favoris
        </span>
      </nav>
    </div>
  );
};

export default Profile;
