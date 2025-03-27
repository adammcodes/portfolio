import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Nav.scss";
import logo from "../images/logo.png";

const Nav = (props) => {
  Nav.propTypes = {
    view: PropTypes.string,
    position: PropTypes.number,
    scrollTo: PropTypes.func,
  };

  // Hold state of whether to switch nav to dropdown for mobile
  const [state, setState] = useState({
    showDropdown: false,
  });

  // If window is resized when mobile nav is dropped down
  // Flip state to closed so that there no blur on document
  const handleResize = () => {
    setState({ ...state, showDropdown: false });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleDropdown = () => {
    setState({
      ...state,
      showDropdown: !state.showDropdown,
    });
  };

  const handleClick = () => {
    // upon user clicking a nav heading
    if (state.showDropdown) {
      // close the mobile nav menu if is open
      toggleDropdown();
    }
  };

  return (
    <div
      className={`Nav ${props.view === "top" ? "" : "pop"} ${
        state.showDropdown ? "expand pop" : ""
      }`}
    >
      {/* LOGO */}
      <div className="nav-left">
        <a href="/">
          <img className="logo" src={logo} alt="Portfolio Logo" />
        </a>
      </div>

      {/* Menu Bars Icon - only visible in Mobile */}
      <i
        className={`fa fa-bars ${state.showDropdown ? "active" : ""}`}
        onClick={() => toggleDropdown()}
      />

      {/* Desktop view nav bar */}
      <div className="nav-right">
        <button onClick={() => props.scrollTo("about")}>
          <div
            className={`nav-item about ${
              props.view === "about" ? "selected" : ""
            }`}
          >
            ABOUT
          </div>
        </button>
        <button onClick={() => props.scrollTo("skills")}>
          <div
            className={`nav-item skills ${
              props.view === "skills" ? "selected" : ""
            }`}
          >
            SKILLS
          </div>
        </button>
        <button onClick={() => props.scrollTo("projects")}>
          <div
            className={`nav-item projects ${
              props.view === "projects" ? "selected" : ""
            }`}
          >
            PROJECTS
          </div>
        </button>
        <button onClick={() => props.scrollTo("contact")}>
          <div
            className={`nav-item contact ${
              props.view === "contact" ? "selected" : ""
            }`}
          >
            CONTACT
          </div>
        </button>
        {/* <a href="https://resume.creddle.io/resume/6p0dgqbzwmq" target="_blank" rel="noreferrer">
          <div className="nav-item resume">
            RESUME
          </div>
        </a> */}
      </div>

      {/* Mobile view nav bar */}
      <div className="nav-dropdown">
        <a href="#about" onClick={() => handleClick()}>
          <div
            className={`nav-item about ${
              props.view === "about" ? "selected" : ""
            }`}
          >
            ABOUT
          </div>
        </a>
        <a href="#skills" onClick={() => handleClick()}>
          <div
            className={`nav-item skills ${
              props.view === "skills" ? "selected" : ""
            }`}
          >
            SKILLS
          </div>
        </a>
        <a href="#projects" onClick={() => handleClick()}>
          <div
            className={`nav-item projects ${
              props.view === "projects" ? "selected" : ""
            }`}
          >
            PROJECTS
          </div>
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <div
            className={`nav-item contact ${
              props.view === "contact" ? "selected" : ""
            }`}
          >
            CONTACT
          </div>
        </a>
        <a
          href="https://resume.creddle.io/resume/6p0dgqbzwmq"
          target="_blank"
          rel="noreferrer"
          onClick={() => handleClick()}
        >
          <div className="nav-item resume">RESUME</div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
