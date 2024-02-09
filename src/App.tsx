import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Lenis from "@studio-freight/lenis";
import Navigation from "./components/navigation/Navigation";
import Announce from "./pages/Announce";
import Profile from "./pages/Profile";
import Message from "./pages/Message";

function App() {
  const location = useLocation();

  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Navigation />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/message/:id" element={<Message />} />
        <Route path="/announce/:id" element={<Announce />} />
      </Routes>
    </>
  );
}

export default App;
