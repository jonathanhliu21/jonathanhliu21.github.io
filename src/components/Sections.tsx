import { experience, profile, skills } from "../data/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <p className="about-copy">{profile.about}</p>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Industry Experience</h2>
      {experience.map((role) => (
        <article
          key={`${role.organization}-${role.dates}`}
          className="experience"
        >
          <div className="experience-heading">
            <h3>
              {role.organization} <span>— {role.role}</span>
            </h3>
            <p>{role.dates}</p>
          </div>
          <ul className="contributions">
            {role.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <dl className="skills">
        {skills.map((skill) => (
          <div key={skill.title}>
            <dt>{skill.title}</dt>
            <dd>{skill.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
