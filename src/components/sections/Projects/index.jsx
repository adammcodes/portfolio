import "./index.scss";
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

const Projects = () => {
  const projectContent = [
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
    {
      title: "The Shoppies",
      description:
        "Search OMDb and nominate movies for awards (Shopify challenge).",
      technologies: ["React", "Material-UI", "Sass", "Node.js", "Express"],
      project: "https://github.com/MagicMark5/shopify-frontend-challenge",
      background: shoppies,
    },
    {
      title: "Interview Scheduler",
      description: "A web app for scheduling interviews.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Sass"],
      project: "https://github.com/MagicMark5/scheduler",
      background: scheduler,
    },
    {
      title: "Jungle",
      description: "A mini e-commerce application built with Rails",
      technologies: ["Ruby", "Rails 4.2", "Bootstrap 4", "PostgreSQL"],
      project: "https://github.com/MagicMark5/jungle",
      background: jungle,
    },
    {
      title: "Tweeter",
      description: "A Twitter clone",
      technologies: ["Node.js", "Express", "jQuery", "HTML", "Sass"],
      project: "https://github.com/MagicMark5/tweeter",
      background: tweeter,
    },
    {
      title: "TinyApp",
      description: "A web app for making tiny URLs.",
      technologies: ["Node.js", "Express", "Bootstrap 4"],
      project: "https://github.com/MagicMark5/tinyapp",
      background: tinyapp,
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
            href="https://github.com/MagicMark5"
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
