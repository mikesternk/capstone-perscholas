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

const Landing = () => {
  return (
    <>
      <Nav />
      <main>
        <img src={Background} className="parallax bg-img" />
        <img src={Mountain7} className="parallax mountain-7" />
        <img src={Fog4} className="parallax fog-4" />
        <img src={Mountain2} className="parallax mountain-2" />
        <img src={Mountain0} className="parallax mountain-0" />
        <img src={Fog3} className="parallax fog-3" />
        <img src={Mountain1} className="parallax mountain-1" />
        <div className="parallax text">
          <h1>The Stick</h1>
        </div>
        <img src={Mountain3} className="parallax mountain-3" />
        <img src={Fog2} className="parallax fog-2" />
        <img src={Mountain8} className="parallax mountain-8" />
        <img src={Mountain6} className="parallax mountain-6" />
        <img src={Fog1} className="parallax fog-1" />
        <img src={Mountain5} className="parallax mountain-5" />
        <img src={Mountain4} className="parallax mountain-4" />
        <img src={SunRays} className="sun-ray" />
        <img src={BlackShadow} className="black-shadow" />
        <img src={Fog0} className="parallax fog-0" />
        <div className="parallax text">
          <h2>Way of</h2>
        </div>
      </main>
    </>
  );
};

export default Landing;
