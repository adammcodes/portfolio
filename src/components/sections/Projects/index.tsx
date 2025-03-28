import "./Projects.css";
import arrow from "../../../images/arrow.png";
import ProjectItem from "./ProjectItem";

import lockdown from "../../../images/projects/lockdown.png";
import scheduler from "../../../images/projects/scheduler.png";
import tweeter from "../../../images/projects/tweeter.png";
import tinyapp from "../../../images/projects/tinyapp.png";
import jungle from "../../../images/projects/jungle.png";
import shoppies from "../../../images/projects/shoppies.png";
import shaiandadam from "../../../images/projects/shaiandadam.png";
import pokemechanics from "../../../images/projects/pokemechanics.png";

interface ProjectContent {
  title: string;
  description: string;
  technologies: string[];
  project: string;
  background: string;
}

const Projects = () => {
  const projectContent: ProjectContent[] = [
    {
      title: "Pokémechanics",
      description: "Pokédex resource for all main-series Pokemon games.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Poke API",
        "Tailwind CSS",
        "Vercel",
      ],
      project: "https://pokemechanics.app",
      background: pokemechanics,
    },
    {
      title: "Shai & Adam",
      description: "Website and rsvp CRM for my wedding.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Notion API",
        "Tailwind CSS",
        "Vercel",
      ],
      project: "https://shaileenandadam.rsvp",
      background: shaiandadam,
    },
    {
      title: "Lockdown",
      description: "A 2D Top-Down shooter game where zombies have taken over",
      technologies: [
        "React",
        "Phaser.js",
        "Tiled",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Webpack",
      ],
      project: "https://github.com/MagicMark5/lockdown2",
      background: lockdown,
    },
  ];

  const projects = projectContent.map((project, index) => {
    return (
      <ProjectItem
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        project={project.project}
        background={project.background}
      />
    );
  });

  return (
    <div className="Projects view">
      <section>
        <div className="section-title">
          <img src={arrow} alt="" />
          Projects
          <div className="line" />
        </div>
        <div className="section-content">{projects}</div>
        <div className="gh-link">
          <a
            className="code"
            href="https://github.com/adammcodes"
            target="_blank"
            rel="noreferrer"
          >
            <li>view more projects on GitHub</li>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
