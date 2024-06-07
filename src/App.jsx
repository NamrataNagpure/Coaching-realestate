import { useState } from "react";
import Navbar from "./components/Navigation";
import MainHero from "./components/MainHero";
import Footer from "./components/Footer";
// import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RealState from "./components/RealState";

import Coaching from "./components/coaching";
import About from "./components/About";
import { Modal } from "./components/Modal";
import { Provider } from "react-redux";


function App() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState("olive");
  return (
    <>
      <Router>
        
          <Navbar />

          <Routes>
            <Route path="/" element={<MainHero />} />
            {/* <Route path="/" element={<Dropdown/>}/> */}
            <Route path="coaching" element={<Coaching />} />
            <Route path="realstate" element={<RealState />} />
            <Route path="About" element={<About />} />
            <Route path="modal" element={<Modal />} />
          </Routes>
          <Footer />
       
      </Router>
      {/* <Dropdown/> */}
      {/* <Modal/> */}
    </>
  );
}

export default App;
