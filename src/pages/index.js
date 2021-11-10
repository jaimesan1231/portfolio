import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import heroImg from "../images/heroImg.svg";

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Presentacion>
          <h1>
            Hola soy
            <br />
            <strong>Jaime Salvatierra Sanchez</strong>
          </h1>
          <p>Frontend Developer</p>
        </Presentacion>
        <HeroImg>
          <img src={heroImg} alt="" />
        </HeroImg>
      </HomeContainer>
    </Layout>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: var(--section-height);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Presentacion = styled.div`
  h1 {
    font-weight: 100;
    font-size: 3rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`;

const HeroImg = styled.figure`
  width: 700px;
  img {
    width: 100%;
  }
`;
