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
  // State of whether to show font awesome bottom border
  const [state, setState] = useState({
    showNavBorder: false, 
  });

  useEffect(() => {
    // on first render we are at the top of the page
    // so we don't show the nav border
    setState({...state, showNavBorder: false});
  }, [props.position]);


  return (
    <div className={`Nav`}>
      <div className="nav-left">
        <a href="/">
          <img src={logo} alt="Portfolio Logo" />
        </a>
      </div>
      <i
        className={`fa fa-bars ${state.showNavBorder ? "active" : ""}`}
      />
      <div className="nav-right">

      </div>

    </div>
  )
};

export default Nav; 