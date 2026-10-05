import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.logo ? (
                  <span
                    className="skill-logo"
                    style={{
                      maskImage: `url(${process.env.PUBLIC_URL}/${skills.logo})`,
                      WebkitMaskImage: `url(${process.env.PUBLIC_URL}/${skills.logo})`,
                    }}
                  ></span>
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
