import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import Login from "./login/Login";

const Navigation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setLoginOpen={setLoginOpen}
      />
      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
      <AnimatePresence>
        {isLoginOpen && <Login setLoginOpen={setLoginOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
