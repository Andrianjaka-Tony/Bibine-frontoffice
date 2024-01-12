import { Dispatch, FunctionComponent } from "react";
import "./SidebarItem.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export interface Item {
  name: string;
  link: string;
  variants: any;
  setSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
}

const SidebarItem: FunctionComponent<Item> = ({
  name = "",
  link = "",
  variants = {},
  setSidebarOpen,
}: Item) => {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <motion.div
      onClick={closeSidebar}
      variants={variants}
      className="sidebar-item"
    >
      <NavLink to={link}>{name}</NavLink>
    </motion.div>
  );
};

export default SidebarItem;
