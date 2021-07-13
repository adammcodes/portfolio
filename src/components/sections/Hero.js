import PropTypes from "prop-types";
import "./Hero.scss";
import Button from "../Button";

const Hero = (props) => {
  Hero.propTypes = {
    scrollToContact: PropTypes.func
  };
  return (
    <div className="Hero view">
      <section>
        <div className="greeting code">
          Hey world, my name is
        </div>
        <div className="name">
          Adam Joseph Marsala
        </div>
        <div className="role">
          I build and design things for the web.
        </div>
        <div className="description">
          <p>
            I&apos;m an avid gamer, runner, and full stack developer based in Toronto with a background in health care as a Registered Physiotherapist.
          </p>
          <p>
            Currently seeking employment opportunities, so feel free to reach out :)
          </p>
        </div>
        <Button text="Say Hello" onClick={() => props.scrollToContact()} />
      </section>
    </div>
  );
};

export default Hero;