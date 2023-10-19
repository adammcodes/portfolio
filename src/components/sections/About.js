import "./About.scss";
import arrow from "../../images/arrow.png";
import profile from "../../images/profile.png";

const About = () => {
  return (
    <div className="About view">
      <section>
        <div className="section-title">
          <img src={arrow} alt="" />
          <div className="title">About Me</div>
          <div className="line" />
        </div>
        <div className="section-content">
          <div className="picture">
            <img src={profile} alt="Profile" />
          </div>
          <div className="bio">
            <p>
              Hi, I&apos;m Adam. My journey with coding started in 2017. I
              started making web browser games with vanilla JavaScript for fun.
              I simply could not be pulled away. Since then I have been on a
              mission to learn as much as possible about programming.
            </p>
            <p>
              Fun fact about me: I have a Master&apos;s degree in Physical
              Therapy, and I worked as a physiotherapist for 1 year before I
              decided to pursue a career in software development.
            </p>
            <div className="technologies">
              Technologies I&apos;ve worked with recently include:
              <ul className="code">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>HTML and CSS</li>
                <li>PostgreSQL</li>
                <li>Email Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
