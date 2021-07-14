import PropTypes from "prop-types";

const SkillsItem = (props) => {
  SkillsItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string,
    list: PropTypes.array,
    sublabel: PropTypes.string,
    sublist: PropTypes.array
  };
  const list = props.list.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  const sublist = props.sublist.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className="SkillsItem">
      <div className="title">
        {props.title}
        <img src={props.img} alt="" />
      </div>
      <div className="description">{props.description}</div>
      <div className="divider" />
      <div className="label">{props.label}</div>
      <ul className="code list">{list}</ul>
      <div className="sublabel">{props.sublabel}</div>
      <ul className="code sublist">{sublist}</ul>
    </div>
  );
};

export default SkillsItem;