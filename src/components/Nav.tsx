import { useState, useEffect } from "react";
import logo from "../images/logo.png";

interface NavProps {
  view: string;
  position: number;
  scrollTo: (section: string) => void;
}

interface NavState {
  showDropdown: boolean;
}

const Nav = ({ view, position, scrollTo }: NavProps) => {
  // Hold state of whether to switch nav to dropdown for mobile
  const [state, setState] = useState<NavState>({
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
      className={`fixed left-0 top-0 z-10 flex w-full items-start justify-between p-4 transition-all duration-500 ease-out border-b border-transparent h-14
        ${
          view !== "top"
            ? "backdrop-blur-nav bg-dark-transparent border-light-1"
            : ""
        }
        ${state.showDropdown ? "h-screen" : ""}`}
    >
      {/* LOGO */}
      <div className="flex items-center mx-2">
        <a href="/" className="h-fit w-fit">
          <img className="w-[78px] h-12" src={logo} alt="Portfolio Logo" />
        </a>
      </div>

      {/* Menu Bars Icon - only visible in Mobile */}
      <i
        className={`md:hidden flex text-2xl text-light-1 mt-2 mr-8 cursor-pointer hover:text-light-5
          ${state.showDropdown ? "text-light-5" : ""}`}
        onClick={toggleDropdown}
      />

      {/* Desktop view nav bar */}
      <div className="hidden md:flex items-center space-x-12 mx-2 pr-4">
        <button onClick={() => scrollTo("about")}>
          <div className={`nav-item ${view === "about" ? "selected" : ""}`}>
            ABOUT
          </div>
        </button>
        <button onClick={() => scrollTo("skills")}>
          <div className={`nav-item ${view === "skills" ? "selected" : ""}`}>
            SKILLS
          </div>
        </button>
        <button onClick={() => scrollTo("projects")}>
          <div className={`nav-item ${view === "projects" ? "selected" : ""}`}>
            PROJECTS
          </div>
        </button>
        <button onClick={() => scrollTo("contact")}>
          <div className={`nav-item ${view === "contact" ? "selected" : ""}`}>
            CONTACT
          </div>
        </button>
      </div>

      {/* Mobile view nav bar */}
      <div
        className={`absolute left-0 right-0 flex flex-col items-center justify-center transition-all duration-500 ease-out bg-dark-transparent backdrop-blur-nav
          ${
            state.showDropdown
              ? "opacity-100 top-[5.5rem]"
              : "opacity-0 -top-[55rem] pointer-events-none"
          }`}
      >
        <a href="#about" onClick={handleClick} className="w-full text-center">
          <div
            className={`nav-item text-2xl py-8 ${
              view === "about" ? "selected" : ""
            }`}
          >
            ABOUT
          </div>
        </a>
        <a href="#skills" onClick={handleClick} className="w-full text-center">
          <div
            className={`nav-item text-2xl py-8 ${
              view === "skills" ? "selected" : ""
            }`}
          >
            SKILLS
          </div>
        </a>
        <a
          href="#projects"
          onClick={handleClick}
          className="w-full text-center"
        >
          <div
            className={`nav-item text-2xl py-8 ${
              view === "projects" ? "selected" : ""
            }`}
          >
            PROJECTS
          </div>
        </a>
        <a href="#contact" onClick={handleClick} className="w-full text-center">
          <div
            className={`nav-item text-2xl py-8 ${
              view === "contact" ? "selected" : ""
            }`}
          >
            CONTACT
          </div>
        </a>
        <a
          href="https://resume.creddle.io/resume/6p0dgqbzwmq"
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          className="w-full text-center"
        >
          <div className="nav-item resume text-2xl py-8">RESUME</div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
