import React from "react";
import { SkillContainer, SkillFigure } from "./SkillElements";
function Skill({ srcIcon, description }) {
  return (
    <SkillContainer>
      <SkillFigure>
        <img src={srcIcon} alt="" />
        <figcaption>{description}</figcaption>
      </SkillFigure>
    </SkillContainer>
  );
}

export default Skill;
