import "./Button.css";

interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Button = ({ text, link, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="Button" onClick={() => handleClick()}>
      {text}
    </div>
  );
};

export default Button;
