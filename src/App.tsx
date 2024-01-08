import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Lenis from "@studio-freight/lenis";
import Navigation from "./components/navigation/Navigation";

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
      </Routes>
    </>
  );
}

export default App;
