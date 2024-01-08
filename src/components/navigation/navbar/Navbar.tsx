import { Dispatch, FunctionComponent } from "react";
import Logo from "../../../icons/Logo";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

interface Props {
  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FunctionComponent<Props> = ({
  isSidebarOpen,
  setSidebarOpen,
}) => {
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
          <span className="navbar-search-icon">
            <CiSearch />
          </span>
          <input
            className="navbar-search-input"
            type="text"
            name="navbar-search-input"
            id="navbar-search-input"
            placeholder="Recherchez cotre voiture"
          />
        </div>
        <span className="navbar-btn">Log in</span>
        <HiMenuAlt4 onClick={openSidebar} className="navbar-menu" />
      </nav>
    </>
  );
};

export default Navbar;
