interface SkillsItemProps {
  img: string;
  title: string;
  description: string;
  label: string;
  list: string[];
  sublabel: string;
  sublist: string[];
}

const SkillsItem = ({
  img,
  title,
  description,
  label,
  list,
  sublabel,
  sublist,
}: SkillsItemProps) => {
  const listItems = list.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const sublistItems = sublist.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="SkillsItem">
      <div className="title">
        {title}
        <img src={img} alt="" />
      </div>
      <div className="description">{description}</div>
      <div className="divider" />
      <div className="label">{label}</div>
      <ul className="code list">{listItems}</ul>
      <div className="sublabel">{sublabel}</div>
      <ul className="code sublist">{sublistItems}</ul>
    </div>
  );
};

export default SkillsItem;
