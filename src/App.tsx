import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Lenis from "@studio-freight/lenis";
import Navigation from "./components/navigation/Navigation";
import Announce from "./pages/Announce";

function App() {
  const location = useLocation();

  const lenis = new Lenis();

  lenis.on("scroll", (e: any) => {
    console.log(e);
  });

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
        <Route path="/announce/:id" element={<Announce />} />
      </Routes>
    </>
  );
}

export default App;
