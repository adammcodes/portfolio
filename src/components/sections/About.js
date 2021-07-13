import "./About.scss";
import arrow from "../../images/arrow.png";
import profile from "../../images/profile.png";

const About = () => {
  return (
    <div className="About view">
      <section>
        <div className="section-title">
          <img src={arrow} />
          <div className="title">About Me</div>
          <div className="line" />
        </div>
        <div className="section-content">
          <div className="picture">
            <img src={profile} />
          </div>
          <div className="bio">
            <p>
              Hi, I&apos;m Adam. My journey with coding started in 2017. I started making web browser games with vanilla JavaScript for fun. I simply could not be pulled away. Since then I have been on a mission to learn as much as possible about programming. 
            </p>
            <p>
              Since completing my Master&apos;s Degree and changing careers from physiotherapy to web development, my goal is to develop tools that can be used for educating others in science and human health. I have a keen interest in public health education, especially the relationship between human psychology and physical health. 
            </p>
            <div className="technologies">
              Technologies I&apos;ve worked with recently include:
              <ul className="code">
                <li>React/React Native</li>
                <li>Node.js</li>
                <li>JavaScript (ES6+)</li>
                <li>Express</li>
                <li>Ruby</li>
                <li>PostgreSQL</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;