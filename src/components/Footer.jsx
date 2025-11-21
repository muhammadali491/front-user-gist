import React from "react";
import gist from "../assets/images/Gist.jpg";
import { TiWorld } from "react-icons/ti";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="red">
      <div className="row margin">
        <div className="third ">
          <img
            src={gist}
            alt="Gist Logo"
            style={{ height: "40px", borderRadius: "6px" }}
          />
        </div>
        <div className="third ">
          <div className="row padding ">
            <div className="col s2 m2 l1 center">
              <TiWorld />
            </div>
            <div className="col s10 m10 l11 small left-align">
              2nd Floor Shadani Market, Ghotki
            </div>
          </div>
          <div className="row  padding">
            <div className="col s2 m2 l1 ">
              <FaMobileAlt />
            </div>
            <div className="col s10 m10 l11 small left-align  ">
              +92 313-3441253
            </div>
          </div>
          <div className="row  padding">
            <div className="col s2 m2 l1">
              <MdEmail />
            </div>
            <div className="col s10 m10 l11 small left-align">
              gist@eduction.com
            </div>
          </div>
          <div className="row  padding">
            <div className="col s2 m2 l1">
              <IoMdTimer />
            </div>
            <div className="col s10 m10 l11 small left-align">
              Mon-Sat 9:00 am to 6:00 pm
            </div>
          </div>
        </div>

        <div className="third small ">
          {/* make a vertical bar of links */}
          <div
            className="bar"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Link to="/" className="bar-item text-white hover-text-blue">
              Home
            </Link>
            <Link to="/about" className="bar-item text-white hover-text-blue">
              About Us
            </Link>
            <Link to="/courses" className="bar-item text-white hover-text-blue">
              Courses
            </Link>
            <Link to="/faculty" className="bar-item text-white hover-text-blue">
              Faculty
            </Link>
            <Link to="/gallery" className="bar-item text-white hover-text-blue">
              Gallery
            </Link>
            <Link to="/contact" className="bar-item text-white hover-text-blue">
              Contact Us
            </Link>
            <Link to="/join" className="bar-item text-white hover-text-blue">
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <p>
        &copy; 2025 Glamour Institute of Science and Technology | Developer
        <a className="hover-text-blue"> Muhammad Ali Kolachi </a> <br />
        <a
          href="mailto:muhammadalikolachi6@gmail.com"
          className="hover-text-blue"
        >
          Click to Contact Developer
        </a>
      </p>
    </footer>
  );
};

export default Footer;
