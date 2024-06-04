import { useState } from "react";
import Navigation from "./components/Navigation";
import Navbar from "./components/Navigation";
import MainHero from "./components/MainHero";
import Footer from "./components/Footer";
// import Modal from "./components/Modal";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RealState from "./components/RealState";
import Dropdown from "./components/Dropdown";
import Coaching from "./components/coaching";
import About from "./components/About";


function App() {
  const [count, setCount] = useState(0);
  const [color, setcolor] = useState("olive");
  return (
   <>
   <Router>
   <Navbar/>
    <Routes>
      <Route path="/" element={<MainHero/>}/>
      {/* <Route path="/" element={<Dropdown/>}/> */}
      <Route path="coaching" element={<Coaching/>}/>
      <Route path="realstate" element={<RealState/>}/>
      <Route path="About" element={<About/>}/>
    </Routes>
   <Footer/>
   </Router>
    {/* <Dropdown/> */}
   {/* <Modal/> */}
   </>
  );
}

export default App;
                                                                                                                                                                                                                                                          