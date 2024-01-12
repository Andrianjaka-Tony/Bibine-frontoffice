import { Dispatch, FunctionComponent } from "react";
import "./Sidebar.scss";
import SidebarItem, { Item } from "./item/SidebarItem";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FunctionComponent<Props> = ({ setSidebarOpen }) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const sidebarVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const imageHidderVariants = {
    initial: { scaleY: 1 },
    animate: {
      scaleY: 0,
      transition: {
        ease: "easeOut",
        delay: 0.3,
        duration: 0.6,
      },
    },
    exit: {
      scaleY: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const sidebarItemVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: "-120%",
    },
    animate: {
      y: "0",
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
    exit: {
      y: "-120%",
      transition: {
        ease: "circOut",
        duration: 0.8,
      },
    },
  };

  const closeVariants = {
    initial: {
      scale: 0,
      rotate: "180deg",
    },
    animate: {
      scale: 1,
      rotate: "0deg",
      transition: {
        ease: "circOut",
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      scale: 0,
      rotate: "180deg",
      transition: {
        ease: "circOut",
        duration: 0.5,
      },
    },
  };

  const items: Item[] = [
    {
      name: "Accueil",
      link: "/home",
      variants: itemVariants,
      setSidebarOpen,
    },
    {
      name: "Profil",
      link: "/profile",
      variants: itemVariants,
      setSidebarOpen,
    },
    {
      name: "Annonces",
      link: "/announces",
      variants: itemVariants,
      setSidebarOpen,
    },
    {
      name: "Blog",
      link: "/blog",
      variants: itemVariants,
      setSidebarOpen,
    },
    {
      name: "A propos",
      link: "/about",
      variants: itemVariants,
      setSidebarOpen,
    },
  ];

  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sidebar"
    >
      <div className="sidebar-container image-container">
        <motion.div
          className="image-container-hidder"
          variants={imageHidderVariants}
        ></motion.div>
        <img
          src="/images/sidebar.png"
          className="sidebar-image"
          alt="sidebar"
        />
      </div>
      <motion.div
        variants={sidebarItemVariants}
        className="sidebar-container sidebar-items"
      >
        {items.map((item, index) => (
          <motion.div style={{ overflow: "hidden" }} key={index}>
            <SidebarItem {...item} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="close-icon-container" variants={closeVariants}>
        <AiOutlineClose onClick={closeSidebar} className="sidebar-close-btn" />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
