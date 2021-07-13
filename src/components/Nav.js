import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Nav.scss";
import logo from "../images/logo.png";

const Nav = (props) => {
  Nav.propTypes = {
    view: PropTypes.string,
    position: PropTypes.number,
    scrollTo: PropTypes.func
  };

  // Whether to show font awesome nav icon (hamburger) fa-bars
  const [state, setState] = useState({
    showDropdown: false, 
  });

  useEffect(() => {
    setState({...state, showDropdown: false});
  }, [props.position]);

  useEffect(() => {
    const handleResize = () => {
      setState({...state, showDropdown: false});
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setState({
      ...state,
      showDropdown: !state.showDropdown
    });
  };

  const handleClick = () => {
    // upon user clicking a nav heading
    if (state.showDropdown) {
      // close the mobile nav menu if is open
      toggleDropdown();
    }
  }


  return (
    <div className={`Nav`}>

      {/* LOGO */}
      <div className="nav-left">
        <a href="/">
          <img class="logo" src={logo} alt="Portfolio Logo" />
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
          <div className={`nav-item about ${props.view === "about" ? "selected" : ""}`}>
            ABOUT
          </div>
        </button>
        <button onClick={() => props.scrollTo("skills")}>
          <div className={`nav-item skills ${props.view === "skills" ? "selected" : ""}`}>
            SKILLS
          </div>
        </button>
        <button onClick={() => props.scrollTo("projects")}>
          <div className={`nav-item projects ${props.view === "projects" ? "selected" : ""}`}>
            PROJECTS
          </div>
        </button>
        <button onClick={() => props.scrollTo("contact")}>
          <div className={`nav-item contact ${props.view === "contact" ? "selected" : ""}`}>
            CONTACT
          </div>
        </button>
        <a href="https://ahhreggi.github.io/docs/resume.pdf" target="_blank" rel="noreferrer">
          <div className="nav-item resume">
            RESUME
          </div>
        </a>
      </div>

      {/* Mobile view nav bar */}
      <div className="nav-dropdown">
        <a href="#about" onClick={() => handleClick()}>
          <div className={`nav-item about ${props.view === "about" ? "selected" : ""}`}>
            ABOUT
          </div>
        </a>
        <a href="#skills" onClick={() => handleClick()}>
          <div className={`nav-item skills ${props.view === "skills" ? "selected" : ""}`}>
            SKILLS
          </div>
        </a>
        <a href="#projects" onClick={() => handleClick()}>
          <div className={`nav-item projects ${props.view === "projects" ? "selected" : ""}`}>
            PROJECTS
          </div>
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <div className={`nav-item contact ${props.view === "contact" ? "selected" : ""}`}>
            CONTACT
          </div>
        </a>
        <a
          href="#" target="_blank" rel="noreferrer"
          onClick={() => handleClick()}
        >
          <div className="nav-item resume">
            RESUME
          </div>
        </a>
      </div>

    </div>
  )
};

export default Nav; 