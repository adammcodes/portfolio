import "./Contact.css";
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
          <p>Drop me a line and I will be in touch.</p>
          <div className="links">
            <a className="button" href="mailto:adammarsala@hotmail.com">
              <Button text="Say Hello" />
            </a>
            <div className="icons">
              <a
                href="https://github.com/adammcodes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/adam-marsala-b1973020a/"
                target="_blank"
                rel="noreferrer"
              >
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
