import React, { useState, useEffect } from "react";
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
  const parallaxEl = document.querySelectorAll(".parallax");

  const updateMousePosition = (e) => {
    // Get the width and height of the window
    const { innerWidth, innerHeight } = window;

    // Calculate coordinates relative to center of window
    let x = e.clientX - innerWidth / 2;
    let y = e.clientY - innerHeight / 2;

    // Update the position
    setMousePosition({ x, y });

    parallaxEl.forEach((el) => {
      let speedX = el.dataset.speedx;
      let speedY = el.dataset.speedy;
      let speedZ = el.dataset.speedz;

      let isInLeft =
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

      let z =
        (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

      el.style.transform = `translateX(calc(-50% + ${
        -x * speedX
      }px)) translateY(calc(-50% + ${
        y * speedY
      }px)) perspective(2300px) translateZ(${z * speedZ}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  });
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
            <img
              src={Background}
              data-speedx="0.3"
              data-speedy="0.38"
              data-speedz="0"
              data-rotation="0"
              className="parallax bg-img"
              alt=""
            />
            <img
              src={Mountain7}
              data-speedx="0.01"
              data-speedy="0.005"
              data-speedz="0.15"
              data-rotation="0.01"
              className="parallax mountain-7"
              alt=""
            />
            <img
              src={Fog4}
              data-speedx="0.25"
              data-speedy="0.305"
              data-speedz="0"
              data-rotation="0"
              className="parallax fog-4"
              alt=""
            />
            <img
              src={Mountain2}
              data-speedx="0.03"
              data-speedy="0.05"
              data-speedz="0.60"
              data-rotation="0.015"
              className="parallax mountain-2"
              alt=""
            />
            <img
              src={Mountain0}
              data-speedx="0.07"
              data-speedy="0.11"
              data-speedz="0.4"
              data-rotation="0.04"
              className="parallax mountain-0"
              alt=""
            />
            <img
              src={Fog3}
              data-speedx="0.16"
              data-speedy="0.18"
              data-speedz="0"
              data-rotation="0"
              className="parallax fog-3"
              alt=""
            />
            <img
              src={Mountain1}
              data-speedx="0.07"
              data-speedy="0.08"
              data-speedz="0.45"
              data-rotation="0.09"
              className="parallax mountain-1"
              alt=""
            />
            <div className="parallax text">
              <h2>Way of</h2>
              <h1>The Stick</h1>
            </div>
            <img
              src={Mountain3}
              data-speedx="0.065"
              data-speedy="0.071"
              data-speedz="0.36"
              data-rotation="0.076"
              className="parallax mountain-3"
              alt=""
            />
            <img
              src={Fog2}
              data-speedx="0.11"
              data-speedy="0.06"
              data-speedz="0"
              data-rotation="0"
              className="parallax fog-2"
              alt=""
            />
            <img
              src={Mountain6}
              data-speedx="0.02"
              data-speedy="0.055"
              data-speedz="0.18"
              data-rotation="0.19"
              className="parallax mountain-6"
              alt=""
            />
            <img
              src={Mountain8}
              data-speedx="0.098"
              data-speedy="0.06"
              data-speedz="0.27"
              data-rotation="0.12"
              className="parallax mountain-8"
              alt=""
            />
            <img
              src={Fog1}
              data-speedx="0.10"
              data-speedy="0.07"
              data-speedz="0"
              data-rotation="0"
              className="parallax fog-1"
              alt=""
            />
            <img
              src={Mountain5}
              data-speedx="0.012"
              data-speedy="0.074"
              data-speedz="0.28"
              data-rotation="0.15"
              className="parallax mountain-5"
              alt=""
            />
            <img
              src={Mountain4}
              data-speedx="0.03"
              data-speedy="0.025"
              data-speedz="0.52"
              data-rotation="0.2"
              className="parallax mountain-4"
              alt=""
            />
            <img src={SunRays} className="sun-ray hide" alt="" />
            <img src={BlackShadow} className="black-shadow hide" alt="" />
            <img
              src={Fog0}
              data-speedx="0.12"
              data-speedy="0.10"
              data-speedz="0"
              className="parallax fog-0"
              alt=""
            />
          </div>
        </main>
      </body>
    </>
  );
};

export default Landing;
