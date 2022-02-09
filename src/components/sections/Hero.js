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
          Hey there, my name is
        </div>
        <div className="name">
          Adam Joseph Marsala.
        </div>
        <div className="role">
          I build and design things for the web.
        </div>
        <div className="description">
          <p>
            I&apos;m an avid gamer, runner, and full stack developer based in Toronto with a background in health care as a Registered Physiotherapist.
          </p>
          <p>
            Right now, I am working full-time as a web developer at a medical marketing agency.
          </p>
        </div>
        <Button text="Say Hello" onClick={() => props.scrollToContact()} />
      </section>
    </div>
  );
};

export default Hero;