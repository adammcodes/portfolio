
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func
  };
  const handleClick = () => {
    if (props.link) {
      window.open(props.link, "_blank");
    } else if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className="Button" onClick={() => handleClick()}>
      {props.text}
    </div>
  );
};

export default Button;