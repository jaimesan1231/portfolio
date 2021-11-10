import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SkillFigure = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    padding: 0.3rem;
  }
  figcaption {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
