import React, { useRef } from "react";
import Nav from "../../Components/Navbar/Nav";

import Hero from "./_hero";

const Home: React.FC = () => {
  //Refs

  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home" ref={homeRef}>
      <Nav className="home-nav" ref={homeRef} />
      <Hero />
      <div style={{ marginTop: "50em" }}></div>
      <div>asdaskjbdashdbashd</div>
    </div>
  );
};

export default Home;
