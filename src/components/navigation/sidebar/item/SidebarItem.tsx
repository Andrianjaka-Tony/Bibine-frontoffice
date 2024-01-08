import { FunctionComponent } from "react";
import "./SidebarItem.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export interface Item {
  name: string;
  link: string;
  variants: any;
}

const SidebarItem: FunctionComponent<Item> = ({
  name = "",
  link = "",
  variants = {},
}: Item) => {
  return (
    <motion.div variants={variants} className="sidebar-item">
      <NavLink to={link}>{name}</NavLink>
    </motion.div>
  );
};

export default SidebarItem;
