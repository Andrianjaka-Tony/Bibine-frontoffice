import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
