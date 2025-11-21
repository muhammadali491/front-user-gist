import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/slideshow/1.jpg";
import image2 from "../../assets/images/slideshow/2.jpg";
import image3 from "../../assets/images/slideshow/3.jpg";
import image4 from "../../assets/images/slideshow/4.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [background, setBackground] = useState(image1);
  const backgrounds = [image1, image2, image3, image4];

  useEffect(() => {
    // GSAP animation on page load

    const interval = setInterval(() => {
      setBackground((prev) => {
        const currentIndex = backgrounds.indexOf(prev);
        return backgrounds[(currentIndex + 1) % backgrounds.length];
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [backgrounds]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${background}')`,
      }}
    >
      <div className="hero-content">
        <h2>
          {" "}
          <span className="text-blue ">Glamour</span> Institute of Science and
          Technology
        </h2>
        <p>
          {/* write 2 lines */}
          Empowering Minds, Shaping Futures. <br />
          <br />
          <br />
          <span className="cta" style={{ background: "none" }}>
            {/* <h4>Ready to Transform Your Future?</h4> */}
            {/* <a
              href="contact.html"
              className="hover-text-white"
              style={{ color: "black" }}
            >
              Contact Now
            </a> */}
            <Link
              style={{ color: "black" }}
              className="hover-text-white"
              to={"/join"}
            >
              Join Now
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
