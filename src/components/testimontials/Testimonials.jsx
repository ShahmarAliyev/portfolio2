import "./Testimonials.scss";

export default function Testimonials() {
  const skills = [
    {
      id: 1,
      name: "React JS",
      img: "../assets/react.jpg",
      skillsets: [
        "Redux",
        "Redux Toolkit",
        "ContextAPI",
        "Hooks",
        "CRA",
        "Git",
        "NodeJs",
        "JavaScript ES6 & JSX",
        "Npm & Yarn",
      ],
    },
    {
      id: 2,
      name: "Other Tools",
      img: "../assets/tools.jpg",
      skillsets: [
        "NodeJs & Express",
        "HTML & CSS",
        "Firebase & MongoDB",
        "TypeScript",
        "SASS, ANT, MUI, Bootstrap",
        "CSS Modules, ",
        "CI & CD",
        "Docker",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Soft Skills",
      img: "../assets/softskills.png",
      skillsets: [
        "Problem Solver",
        "Team Worker",
        "Self-Motivated",
        "Perseverance",
      ],
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={skill.featured ? "card featured" : "card"}
          >
            <div className="top">
              <img src="../assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={skill.img} alt="" />
              <span>{skill.name}</span>
            </div>
            <div className="center">
              <ul>
                {skill.skillsets.map((skillsetItem) => {
                  return <li key={skillsetItem}>{skillsetItem}</li>;
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
