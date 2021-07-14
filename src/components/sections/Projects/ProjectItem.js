import PropTypes from "prop-types";
import link from "../../../images/link.png";

const ProjectItem = (props) => {
  ProjectItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    project: PropTypes.string,
    background: PropTypes.string
  };
  const handleClick = () => {
    window.open(props.project, "_blank");
  };
  const technologies = props.technologies.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div
      className="ProjectItem"
      onClick={() => handleClick()}
      style={{backgroundImage: `url(${props.background})`}}
    >
      <header>
        <div className="title">{props.title}</div>
        <img src={link} alt="Link to source code" />
      </header>
      <div className="description">{props.description}</div>
      <ul className="technologies code">{technologies}</ul>
    </div>
  );
};

export default ProjectItem;
