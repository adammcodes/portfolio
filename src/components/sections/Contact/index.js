import "./index.scss";
import arrow from "../../../images/arrow.png";
import Button from "../../Button";

const Contact = () => {
  return (
    <div className="Contact view">
      <section>
        <div className="section-title">
          <img src={arrow} alt="" />
          Contact
          <div className="line" />
        </div>
        <div className="section-content">
          <p>
            If you&apos;d like to chat or just want to say hello, send me an e-mail and I&apos;ll get back to you as soon as possible!
          </p>
          <div className="links">
            <a className="button" href="mailto:adammarsala@hotmail.com">
              <Button text="Say Hello" />
            </a>
            <div className="icons">
              <a href="https://github.com/MagicMark5" target="_blank" rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adam-marsala-b1973020a/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;