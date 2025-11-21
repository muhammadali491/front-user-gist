import { useState } from "react";
import gist from "../assets/images/Gist.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
    if (toggleSidebar) toggleSidebar();
  };
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Courses", href: "/courses" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Join Now", href: "/join" },
  ];

  const location = useLocation();

  return (
    <>
      {/* Header */}
      <header
        className="bar light-grey card"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <img
          src={gist}
          alt="Gist"
          className="bar-item"
          style={{ height: "40px", borderRadius: "6px" }}
        />

        {/* Menu icon for small screens */}
        <button
          className="bar-item button hide-large hide-medium"
          onClick={toggle}
          style={{
            fontSize: "24px",
            background: "lightgray",
            color: "black",
            borderRadius: "6px",
            padding: "6px 12px",
            transition: "all 0.3s ease",
          }}
        >
          ☰
        </button>

        {/* Navbar for large screens */}

        <nav className="hide-small ">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`bar-item button bottombar hover-border-blue ${
                item.href == location.pathname ? "border-blue" : ""
              }`}
              style={{
                margin: "0 6px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                background: item.href == location.pathname ? "lightgray" : "",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`sidebar bar-block animate-left ${
          sidebarOpen ? "show" : "hide"
        }`}
        style={{
          width: "220px",
          backgroundColor: "#f1f1f1",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
          position: "fixed",
          zIndex: 1100,
          height: "100%",
          top: 0,
          left: 0,
          transition: "transform 0.3s ease-in-out",
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button
          onClick={toggle}
          className="bar-item button red"
          style={{ fontWeight: "bold" }}
        >
          × Close
        </button>
        {navItems.map((item, index) => (
          <Link
            onClick={toggle}
            key={index}
            to={item.href}
            className="bar-item button"
            style={{ transition: "0.3s", fontSize: "16px" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
