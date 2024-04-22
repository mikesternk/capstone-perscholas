import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav.js";

//#region
// Importing all the images
import Background from "../../images/Background.png";
import Mountain0 from "../../images/Mountain_0.png";
import Mountain1 from "../../images/Mountain_1.png";
import Mountain2 from "../../images/Mountain_2.png";
import Mountain3 from "../../images/Mountain_3.png";
import Mountain4 from "../../images/Mountain_4.png";
import Mountain5 from "../../images/Mountain_5.png";
import Mountain6 from "../../images/Mountain_6.png";
import Mountain7 from "../../images/Mountain_7.png";
import Mountain8 from "../../images/Mountain_8.png";
import Fog0 from "../../images/Fog_0.png";
import Fog1 from "../../images/Fog_1.png";
import Fog2 from "../../images/Fog_2.png";
import Fog3 from "../../images/Fog_3.png";
import Fog4 from "../../images/Fog_4.png";
import SunRays from "../../images/Sun_Rays.png";
import BlackShadow from "../../images/Black_Shadow.png";
//#endregion

import "./landing.css";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    // Get the width and height of the window
    const { innerWidth, innerHeight } = window;

    // Calculate coordinates relative to center of window
    const x = e.clientX - innerWidth / 2;
    const y = e.clientY - innerHeight / 2;

    // Update the position
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

const Landing = () => {
  const { x, y } = useMousePosition();
  console.log(x, y);
  return (
    <>
      <body>
        <Nav />
        <main>
          <div className="vignette">
            <img src={Background} className="parallax bg-img" alt="" />
            <img src={Mountain7} className="parallax mountain-7" alt="" />
            <img src={Fog4} className="parallax fog-4" alt="" />
            <img src={Mountain2} className="parallax mountain-2" alt="" />
            <img src={Mountain0} className="parallax mountain-0" alt="" />
            <img src={Fog3} className="parallax fog-3" alt="" />
            <img src={Mountain1} className="parallax mountain-1" alt="" />
            <div className="parallax text">
              <h2>Way of</h2>
              <h1>The Stick</h1>
            </div>
            <img src={Mountain3} className="parallax mountain-3" alt="" />
            <img src={Fog2} className="parallax fog-2" alt="" />
            <img src={Mountain6} className="parallax mountain-6" alt="" />
            <img src={Mountain8} className="parallax mountain-8" alt="" />
            <img src={Fog1} className="parallax fog-1" alt="" />
            <img src={Mountain5} className="parallax mountain-5" alt="" />
            <img src={Mountain4} className="parallax mountain-4" alt="" />
            <img src={SunRays} className="sun-ray" alt="" />
            <img src={BlackShadow} className="black-shadow" alt="" />
            <img src={Fog0} className="parallax fog-0" alt="" />
          </div>
        </main>
      </body>
    </>
  );
};

export default Landing;
