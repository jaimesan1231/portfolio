import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Skill from "../components/Skill/Skill";

//Icons
import htmlIcon from "../images/htmlIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import javaScriptIcon from "../images/javaScriptIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import mongodbIcon from "../images/mongodbIcon.svg";
import mysqlIcon from "../images/mysqlIcon.svg";
import nodejsIcon from "../images/nodejsIcon.svg";

function Habilidades() {
  return (
    <Layout>
      <HabilidadesContainer>
        <h1>Habilidades</h1>
        <HabilidadesSection>
          <h3>Frontend</h3>
          <ListaHabilidades>
            <Skill srcIcon={htmlIcon} description="Html" />
            <Skill srcIcon={cssIcon} description="Css" />
            <Skill srcIcon={javaScriptIcon} description="JavaScript" />
            <Skill srcIcon={reactIcon} description="React" />
          </ListaHabilidades>
        </HabilidadesSection>
        <HabilidadesSection>
          <h3>Backend</h3>
          <ListaHabilidades>
            <Skill srcIcon={mongodbIcon} description="MongoDB" />
            <Skill srcIcon={mysqlIcon} description="MySql" />
            <Skill srcIcon={nodejsIcon} description="NodeJS" />
          </ListaHabilidades>
        </HabilidadesSection>
      </HabilidadesContainer>
    </Layout>
  );
}

export default Habilidades;

const HabilidadesContainer = styled.div`
  width: 100vw;
  height: var(--section-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const HabilidadesSection = styled.div`
  max-width: 1000px;
  text-align: center;
  padding: var(--padding-page);
`;
const ListaHabilidades = styled.div`
  width: 100%;
  display: flex;
`;
