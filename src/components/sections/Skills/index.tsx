import arrow from "../../../images/arrow.png";
import SkillsItem from "./SkillsItem";
import "./Skills.css";
import development from "../../../images/development.png";
import design from "../../../images/design.png";
import rocket from "../../../images/rocket.png";

interface SkillContent {
  img: string;
  title: string;
  description: string;
  label: string;
  list: string[];
  sublabel: string;
  sublist: string[];
}

const Skills = () => {
  const skillsContent: SkillContent[] = [
    {
      img: development,
      title: "Development",
      description:
        "I like building from new ideas or recreating existing tools to improve how they work.",
      label: "Programming Languages:",
      list: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Python", "C"],
      sublabel: "Libraries, frameworks & tools:",
      sublist: [
        "Node.js",
        "Next.js",
        "Tailwind",
        "React",
        "Phaser.js",
        "MJML",
        "Express",
        "PostgreSQL",
        "Jest",
        "jQuery",
        "Git",
      ],
    },
    {
      img: design,
      title: "Creative",
      description:
        "I value creating simple, clean, and intuitive designs with a minimalist aesthetic.",
      label: "Experiences I draw from:",
      list: [
        "Email Development",
        "Web Development",
        "Game Development",
        "Freelancing",
      ],
      sublabel: "Design & content creation tools:",
      sublist: ["Adobe Illustrator", "Figma", "Gimp", "Tiled", "Piskell"],
    },
    {
      img: rocket,
      title: "Content Management",
      description:
        "I love figuring out the best ways to automate things and make work easier for my team.",
      label: "CRM tool I have experience in:",
      list: [
        "SFMC (Salesforce Marketing Cloud)",
        "Veeva Vault/Veeva CRM",
        "HubSpot",
      ],
      sublabel: "Project Management Tools",
      sublist: ["Teamwork", "Notion"],
    },
  ];

  // Parse skills/experiences into SkillItem components
  const skillItems = skillsContent.map((skill, index) => {
    return (
      <SkillsItem
        key={index}
        img={skill.img}
        title={skill.title}
        description={skill.description}
        label={skill.label}
        list={skill.list}
        sublabel={skill.sublabel}
        sublist={skill.sublist}
      />
    );
  });

  return (
    <div className="Skills view">
      <section>
        <div className="section-title">
          <img src={arrow} alt="" />
          Skills
          <div className="line" />
        </div>
        <div className="section-content">{skillItems}</div>
      </section>
    </div>
  );
};

export default Skills;
