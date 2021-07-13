import logo from "../images/logo.png";

const Nav = () => {
  return (
    <div className={`Nav`}>
      <div className="nav-left">
        <a href="/">
          <img src={logo} alt="Portfolio Logo" />
        </a>
      </div>

    </div>
  )
};

export default Nav; 