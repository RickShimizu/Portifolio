import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: 'HTML5 -       Intermediario' },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: 'CSS3 -        Intermediario' },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: 'JavaScript -  Intermediario' },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: 'NODE -        Intermediario' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: 'MySQL -       Intermediario' },
  { id: "react", name: "React", icon: <DiReact />, description: 'REACT -       Intermediario' },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
