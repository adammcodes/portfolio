import "./index.scss";
import arrow from "../../../images/arrow.png";
import SkillsItem from "./SkillsItem";
import development from "../../../images/development.png";
import design from "../../../images/design.png";
import rocket from "../../../images/rocket.png";

const Skills = () => {
  const skillsContent = [
    {
      img: development,
      title: "Development",
      description: "I like building new ideas or recreating existing tools to improve how they work.",
      label: "Languages I've used:",
      list: [
        "HTML",
        "CSS/Sass",
        "JavaScript (ES6+)",
        "SQL",
        "Ruby",
      ],
      sublabel: "Libraries, frameworks & tools:",
      sublist: [
        "Node.js",
        "Phaser.js",
        "MJML",
        "Express",
        "React",
        "Axios",
        "jQuery",
        "PostgreSQL",
        "Rails",
        "Bootstrap",
        "Material-UI",
        "Mocha",
        "Chai",
        "Jest",
        "Cypress",
        "Storybook",
        "Git",
        "Heroku",
        "Netlify",
      ]
    },
    {
      img: design,
      title: "Creative",
      description: "I value creating simple, clean, and intuitive designs with a minimalist aesthetic.",
      label: "Experiences I draw from:",
      list: [
        "Email Development",
        "Web Development",
        "Teamwork® Developer API",
        "Game Design",
        "Freelancing",
      ],
      sublabel: "Design & content creation tools:",
      sublist: [
        "Adobe Illustrator",
        "Veeva Vault",
        "Gimp",
        "Tiled",
        "Piskell",
      ]
    },
    {
      img: rocket,
      title: "Research & Analysis",
      description: "I am driven by discovery and applying new insights into my work.",
      label: "Research topics I have presented:",
      list: [
        "Chronic Pain",
        "Pain Neuroscience",
        "Pulmonary Hypertension",
        "Rheumatoid Arthritis",
        "Phantom Limb Pain",
      ],
      sublabel: "Data Analysis Tools",
      sublist: [
        "Salesforce CRM",
        "Google Analytics",
        "Microsoft Excel",
        "SPSS",
      ]
    }, 

  ];

  // Parse skills/experiences into SkillItem components
  const skillItems = skillsContent.map((skill, index) => {
    return (
      <SkillsItem
        key={index}
        img ={skill.img}
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
        <div className="section-content">
          {skillItems}
        </div>
      </section>
    </div>
  );
};

export default Skills;