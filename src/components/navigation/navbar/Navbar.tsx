import { Dispatch, FunctionComponent, useEffect, useState } from "react";
import Logo from "../../../icons/Logo";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import storage from "../../../helpers/storageHelper";
import { useNavigate } from "react-router-dom";

interface Props {
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  setLoginOpen: Dispatch<React.SetStateAction<boolean>>;
  setSearchOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FunctionComponent<Props> = ({
  isSidebarOpen,
  setSidebarOpen,
  setLoginOpen,
  setSearchOpen,
}) => {
  const navigate = useNavigate();

  const [isLogged, setLogged] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const userStorage = sessionStorage.getItem(storage.user);
    if (userStorage) {
      setUser(JSON.parse(userStorage));
      setLogged(true);
    }
  }, [count]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const suppressorVariants = {
    initial: {
      height: 0,
    },
    animate: {
      height: isSidebarOpen ? "100vh" : 0,
      transition: {
        ease: "easeInOut",
        delay: isSidebarOpen ? 0 : 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={suppressorVariants}
        initial="initial"
        animate="animate"
        className="suppressor"
      ></motion.div>
      <nav className="navbar">
        <Logo className="navbar-logo" />
        <div className="navbar-search">
          <input
            onFocus={() => {
              setSearchOpen(true);
            }}
            className="navbar-search-input"
            type="text"
            name="navbar-search-input"
            id="navbar-search-input"
            placeholder="Recherchez votre voiture"
          />
          <span className="navbar-search-icon">
            <CiSearch />
          </span>
        </div>
        {!isLogged && (
          <span
            onClick={() => {
              setLoginOpen(true);
              setCount(count + 1);
            }}
            className="navbar-btn"
          >
            Se connecter
          </span>
        )}
        {isLogged && (
          <span
            onClick={() => {
              navigate(`/my-profile`);
            }}
          >
            <img className="user-image" alt="user" src={user.profile} />
          </span>
        )}
        <HiMenuAlt4 onClick={openSidebar} className="navbar-menu" />
      </nav>
    </>
  );
};

export default Navbar;
