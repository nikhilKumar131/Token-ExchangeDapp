import Headers from "./components/header"
import Navigation from "./components/naviation";
import About from "./pages/About";
import Footer from "./components/footer";
import Home from "./pages/Home"
import Metamask from "./pages/Metamsk";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div >
      <Navigation />
      <Headers />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Metamask' element={<Metamask />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;