import link from "../../../images/link.png";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  project: string;
  background: string;
}

const ProjectItem = ({
  title,
  description,
  technologies,
  project,
  background,
}: ProjectItemProps) => {
  const handleClick = () => {
    window.open(project, "_blank");
  };

  const technologyList = technologies.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div
      className="ProjectItem"
      onClick={() => handleClick()}
      style={{ backgroundImage: `url(${background})` }}
    >
      <header>
        <div className="title">{title}</div>
        <img src={link} alt="Link to source code" />
      </header>
      <div className="description">{description}</div>
      <ul className="technologies code">{technologyList}</ul>
    </div>
  );
};

export default ProjectItem;
